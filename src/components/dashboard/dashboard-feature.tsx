/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "ifa57Uwweku19iiME4dE2BEryUCKM6igU6KGGZxCeRuQ2wVYRkVo9XYEu6CvAYso7XNLHiWHsdEg1af31JrZATW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvfGmu8PvXA6rpRdD5BNGMHfF1qMyKATCFmX1JHZArhHLhqcSsAV3fZFNjXAPgYNAsgdNffiCPSfNJss2VgCdan",
  "key1": "2ge6v5Vgh5Zb5fabugnsukLe4PMiRW4kNrNipT9zme1qVm15c6y6R8Wg1dUyfaVxDPws6a4qZQjX6RQy7iYatGNa",
  "key2": "4z3MszEGhBMAaF9EHE4JDtnt2ghr6GEyfr8EiutkEmRENebCfq5rnNeNK3Kdnw634eqCj9dH77UrLrXwwEgnKXn1",
  "key3": "KaK7m7pyad6JYpgTA5oRmpfHPVmPrpdh9QcB6oD72ZoDDjN31zAJuiik1PbieKvQ74QAdzAmogC19pPSKRVT4if",
  "key4": "5QS971ear8okb6DHQoMmnQ2Va7HN18wqLCNHqdM7CwCjcNYZe6JUxfrQA2wq6VpUGS5nfTXzBwe1muCPbjzSwn7N",
  "key5": "2xDZ1pG2jaEY1YF9sVhuQGjoFQSfGZ9L3SFBci9nKxZQ7m8B8S8ndBrSGAdJiM2q5QukxYv1kUok56N1FU7pYSJc",
  "key6": "2pSywVwuA53pmW42Y6hcBe7yba3xgARk24zA2vaU33zQjCcT3XjgEHdwGEsAZHk2UryCPNz4iQy1YoF7obf68qS5",
  "key7": "4GsEyCGj62rC7bPHawAmiGfLm8Z7zmJrGvmZiRWq14Gd8P3NhAZ4UPaHwWFcpLg3eDdhR4xVDrHMkD7WxNmV5eaA",
  "key8": "1s2i94DUJd4EwGJmEQFQ6CMP1F85GTDKSL9E4w136PDZTeGGcTJg9s9gVqvF8GR842hxQBWJ9WBF1HWPUtE69CV",
  "key9": "4BESLwZiYwnMyh9A99teivDSWhX4cLSh2wzzPSbMu7eKp1n2AwcVx2cdYy5FDtGv2W8eFjrbcgdPVhnJgWxEed6o",
  "key10": "2buhezZ1gJipo1KYdb5RaebNCMn4vLm3ZbxKvFz7BgLJ2Zxs236wxnfRGnE2JwXT5Wv7WBDfs41fzXhyzdv224mT",
  "key11": "4AhQy3ndMs2rMLrkjQjchLx3BTm6N5DevyHnh4zz4SLyyhkce7gBPAno1vZ8EGtbhQp6YouCvYMFnXQ6M55uSqE8",
  "key12": "3y65sJ4jemgdMPKziFYZrcLd5WKkx7Sc5gapASGcjUASgQ2RLbi9t169Rep8VznKkavHak6QQSTvVdFBP1cmGFML",
  "key13": "5T2J1Vmzm7hJfgPzLoZ7kL26t6Kfgmh9SvdtUjmihd1nojJgD69QFv9BrCN3qcM4X8gaD6YhTAPtiVtaTcJtv8vs",
  "key14": "JF7U5X77REeEVBc6KS5LK7GstVvMtcJLUMRidf7NXyB7hFcuU9umAnnroJjMWD4Pm1ajTLiwWbYLR9HGzFfKdzq",
  "key15": "2pnd21vGtd8YjX7odAq3hdCadrHJ2i4qQmkSbFvVCnHZp8UMPNN5kwrrHJeeBLiAe9VnaEZUUGcoVFLFBmbcNQDv",
  "key16": "38SqAyeANYsr5eG3QD2mzCPffcs4bzpKfohhA73S2bbVSs7xyQ9ZFc4gVp9uw3CUF7jCKbyXzMcyABAEokYnkifJ",
  "key17": "5C3QJHGhGhrdXQ9emDkCHXu99QE5f6ho8n2UCJNAJWwKdrP5mHPtoS739jUvsbXGeFu6ZC4xjSo9KbqKXTTiz5Z1",
  "key18": "3bAzHvspeTvJ1bsLkK3rSsD2n3VuqSDscj5tzEDBFofRDGpudLu757YTT12WQTCV9tjDuCEVa2sAizkgAPuBZWN5",
  "key19": "5JJ3KAoR5DcwgwVQofAGJi4MPy4ZNw3jjb8vj5NrG2vAUrfxPkByewucacS7gnv1eR4PskF9GQSWcpv11grdiWzP",
  "key20": "4fK1qEM7jF2yCtzGKp5Z5zf2LqNdc2zC99z9SuUB1XvTbe59xQU3dKXzBX988bkuyqWrrcfe85KKVngMnsdDGosH",
  "key21": "5MFauTdwkKhwcRBwmXF8d9qTgnRzSzmHN5L9tg29euA95tRX7KsfhB6QsdSYx7imrbU7twrPgvnvhcG3rPmouomC",
  "key22": "32KxYHodWWZRa6mhDd8eeQxHGoCXTycGjhGGFxB6ARM4a63cBgjKskqgyvXebW8td8q4SdChgRzSnMPCq9jwyQfd",
  "key23": "3xqqHXzraP1Q8rTBSxoaKb9Y7UjTva2K2dfdQoERyAtqmwzq2HhN3ToyRcnriKPXi4oxpk85bqtXdFHCSJqVm3Ye",
  "key24": "42AiZzahQ53ugs85yMkscjdHwauvXZdhwTZtEFTHaQhRvaJTnt9G8PPHbdo9D2U5SHJKwTR49uvo9biRSpZnLMRf",
  "key25": "3xcoCgy4JM3xtMpnnGKJNzv6HHiz8VvhekPCcgjX68pc87p52171JoiAV7t3hzNY7YxM3SPtXkBaWys2uZNTdhrp",
  "key26": "5diEaKxzJeqVwVCw5Kvq6u5ygridXoqYVS2wASQZT5GW7tpFPcB3Z8cQA4wyBnUbR7h9pT4LNHnEmyEKzXpK92Cv",
  "key27": "KsMtQBm8qmd7sXruXhkSysoBckudLYnomDwxxhrWu8xacKAXMwaWEZwQUk2qpKQdj2aKtUAJVkmxJ4PMjGxpy7m",
  "key28": "N3GuhjjBYi1Vp7FETqAFwgG4GQ2ivDdwfnNgNYAf9ywJcPMWhjzh5U1xXwaLvVUpTUrgRP2TMxeZRikBPYaBkiF",
  "key29": "adyjD7S2Tu8nKHZRh1MiLDcyQUZweT4ufJhp5CGdDkw4nTLagFpSoERamjxceAp3QyAaKsQKuECzyWaosyaK8qs",
  "key30": "3377HDbwWToe8rMn7gv1hQwS4UKU2tE4uejVPPu8CA3ejMhT49gbuS1nYMyA21CkZn1HzVouM4W4sisTrNyFQqm1",
  "key31": "4ochyAi31xkA18Adk4uRg6XpZNpa6X1EFj8ApzR5ofc6BZsWpRJUjM8N5NtDaciPWHJn8cYCepei4EKmePSrb62y",
  "key32": "4kjCHnyxtxyrZdQXSn3bzuWowrag4GNmaEKppNXcsDHUK853sX3R3HkN5heGZ9izPeJwYYfpQqrYmMZVU7MRgaR",
  "key33": "29h7bAaFYPSLzWpbNckG3xN9GSrzYwnkyWMzUDmjE9ScVH3NXVmNCyMmReBHPPME8PaWbJwL7agaxSKovQKAweXR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
