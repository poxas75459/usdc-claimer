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
    "2qG8mTrZ45Uq6iSM9VLf9gY3uSwQPZDDQHjivx2iAAXR1sXrAAxuNQwmqa4KMKjJw5MNQM24PEWzRw6L1vRPjUHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22C5RCUmijibExb81EuV3BpRwbQRSmonDBsaawRVEZQ3rfibcasTFt1uszhuvC6iGMY1ZSN3SW1iQq71RWDeoMxr",
  "key1": "4AqbpXeooGU1JXAyHoEwPrTknKnhkFJkuoRkobsudpMRXpTyNPeHUrqyjTokVtV4NEePD4D13MwB1LxRyQCh9Qiw",
  "key2": "3zuyG84KLiPqioGEjNaXtNvMN3MA4TyWM6BNfy4CqoFyce2ZWRdASLgJQh3pA4cKuJ5MTXGpe6D6YgyTLoUZT6Ks",
  "key3": "594rdkvG4HXyFd4UBAPhg2najc46UF9T9dG2a1ftixDbpDa6dAcGmjMJyxBeJcgD46PF1yaz6u5X518HRRULvD3V",
  "key4": "2gxQPHc5a1ndvVW74XJKgJNXqFHRmC6aX6sbX1MSdsD44STaYZkTqXdQ7Xq56HjCpJmuVCxKiyfiPwU9VPkHEQcq",
  "key5": "5qekqzWCZdsgybqD64FRu8UkYa2w3VXCwbAnZLKpbVPQdnS7nkxkwW5iWHe4zkg5vWJ1mFg1qmzRg9YxkrshWxXa",
  "key6": "5U8ca3TUVPFsQRVyuVgYMgcaByzxNttR5VZDBCszV5DRGXxkxgeUxu7q5D8NL6Bjhg2eSBVnQjnpETqXUFwkmxHL",
  "key7": "2htLTm2P3Fj54g5nDwtbtVz4ocypQnLD1tqNeDSrrpPS2fVyrPf7eYSbmdgxA5crx5YVZHbYihwyHYqL5CCX8CC4",
  "key8": "3Z3HMBbFd5iceTTsRxEExpbMVC71rK9HKLdxeYZwuPuERns2BFLWJCtknn2UgGkmsDhkHLAMxqdwdzCUrYNz4za1",
  "key9": "4yxskdYyC555zETDzQScjjghbFh7s2UN9aDfnEtoCp8ZoQSTeCyvwJiLobCuh78h63bxELV2NC2fU2s63FkYGkSC",
  "key10": "1soDKjGV5cdAgx6mJ6Jj8V97uCRP5nKBMYiPtSz5db3hfEG4CCpKVP2TsZafKNddT9ff4rw3Rj7WzNfkb7SMwQ6",
  "key11": "3Roa9Yfbk629YD7TLjx4SDtYJ8z4CeCJAs8nRRvvAichz6rmRqq6bNxaEVvg158Hha3crxoVPyAzqynxHCuwLWvf",
  "key12": "5hAHgAqy36SLFaQ6XaLJz59btEo6i6AaD3bxoBLC9Zv6sP3vVN4HBQjFnPenuj5QvNrK9GtLiZk9K2QeEdSfX3EX",
  "key13": "3uC2NA9K8r3HRyAVHf1AAxv34QoDCFg8L6qAEhHm5oNAfMs9ALQTssdyCZrX3LHHrSPbkMUczEanAEKh8pEZBkRS",
  "key14": "5yfnWmcSgTajhi8tjU7SLzjoDGutn7hktbD3jEEiUjcTTsMmkQJ55AzrKts7xEHr5FBbPcnStrLVaeE98obUjusG",
  "key15": "5ETUMQTUojf3TAbHBcQvwZztmfHJmCpMY56yJJA5ZSpJwzKojsKCb8SDte942ZdPPiXgEYpHzRpdzpyDXUMiJbM5",
  "key16": "5puqNWX2i6tuZQky6nEZVZGJKoPTpu1A2wK267hMB33keBUwQ8Lj7qo93Mwimhtie2w7pGyWesi1ZhPS4TuGtaRu",
  "key17": "4euT3CjWE9zTnyJ2tkH9YX7V3qHezypULkqkNuRifL2xrF21b34wzgwx2A8rRgQNTXM2oXHyGKLiRSfmREXhMbRW",
  "key18": "2PTAzorKPY1hPh6EfsnaZEjusHLMdTpYVfKY3RuDfvg5S35kq1ZzgSrnWBxrxYrq3WYEfUXK7ynAVKT18pGbJ4cZ",
  "key19": "3QNgBSqUfLBuTPgdQFXU7s5JhdPqsoFsEkB5CoZwCCMRN8C8tKs7o1jnEKVQvkHv8xx2T6EbBKQHA1RMfDCD3cem",
  "key20": "44iK3P7qv3FUmXJ1Vs7DAn2WQ3A67e85Ly84QnE219VK1VbbVMmT4QQD1oxZ9jUSh7CUmxUgYsCbEwxMzwv9ieNS",
  "key21": "2hGKaHXEB2Rvqm3Q1cEqB6HJLBff7WN8YFwSdDG6wzhRq8Dow9SpiE9VngUNpL9diprnTDqzNaUaTpneVRqxF4Kc",
  "key22": "4W4ML31RF9u6WConoD5ASngZ21zLZXWYvUQbjUGJwCjVRDT4V1Z1sXm15tuRCuayxCuc2JFw6hkMRjA5rpWmvd3Z",
  "key23": "4a7AEBCRBgrXqP5KXdTh6ru4et2J4fLU2nztt674TDZ5gYtiYqhTB8pHCcPBZrHWbLnHPbASfmWj3QBpe59STxdb",
  "key24": "4wLbQhsUV5QhkrPPw1U1kufzQa5RiLaAHQrC8trwwo6UA1MeuNj69KX5uoBVDhdFcfc92sTYAp3cQDQtCUxgSFYx",
  "key25": "4w9HxzJ7gBXF3LMMAKX1281woEXW1Ca2Ry2sGY83Q7M4Nv85Lhh8p3M7fwNJUCXVWvz4Z5o2FHtUZmFqVCHbkNu1",
  "key26": "3bJTMMW9H32KFXdvkPHPv86XpXAz2Ziqri3htSjSKvb59PWqnMBS79fQDvQagSuNZ9tBhN4JCpqRc9fh6YQ4JyPk",
  "key27": "M3qHqAEfUbAqheFAM4ju7TDSAzMQCHTn3RcYYHRwdXyMDnP2hkSEC87K6viGxXeg9t8r2yDvwEpNyFjgUJapsZ2",
  "key28": "4xD7FqXxnCEHjnyrLL3uuHBJPrxbBwS4AbVDawfSeAaL2jGfNDaqoQJcKpMhDQJvsAvDQ6RcMneCrWgNX6Yp4HM4",
  "key29": "2KYknhhN1SF864vcw38pK3EGUFZVwjZsX5PXSHfjMvNQjKkHq8Wsx65cB1Dc55qdPc8Gqm9Hgt8MiGAoitfcZ7i4",
  "key30": "2JXiqaM1nAVFL36jYqQLroYrLC4teqLZUpdX7Jt2v7FAD6irRuXhYF9AJptrQuYYmDYu4J26HfWVYcmhy2GUWsKP",
  "key31": "5i3LvRdk8uxCr1rtPmCVijm9n9GG5FEsDJCbfeWgV5hnWukA7vRT1XwmuYKXX4QynFE7BVbfwPS2ikbapQ5NokQn"
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
