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
    "2FWsEFivJJz5evxHDAzCvF8V9GkK99LeGpU5Kkf6DtjpgUUSJtrxRNXHNskP59zYRAru2rJi9i2VVzv2DjTdxB8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5kYMDz29GujPZgHNsBrtnHPQPQkNg4u8LDJyH1ibc7ZSVsRBaqE29FL4FvMeyzdWrPEPgWndYtzLPA7z67cMfp",
  "key1": "34uBJ4AaJFfNjJwTgLPXSMyxS4oSQz67PAGSZiYPdH7wLboRVx8SQuxGiatFaeM356ZcEac65xLjGgm2KHEu2pVw",
  "key2": "258ngsaoaCfBe4sjTx9tPFn34qUm47AWQgF98snBpvi4vHjJ24dvzMTmLrDzYW1NtzFBRP4oCcYEBsRR1r5aKrqF",
  "key3": "25CjWLq8izJzGFV4VGxmW9YFS5QZiGkUNufycWXXcWHYNZdyf81uzZv1u3c5gFX3d8dEGamJeeCRnhgJFk9asLnt",
  "key4": "2QHp7zBsQz5oMxaeTFq6zox2NEJaoDRGdHYD4HBoSS87k7QaAtkWw3THn1TJx4zoakqXQGMDehyCDzQr1YBWAExC",
  "key5": "QyaSfjfK92ETcYnJVGxAAynroGF7hFRaC3a869SKvPzed5KHPkqYxoSAfu9NjGWzg1tLgLBV1k7M7moHjJnmyQ9",
  "key6": "CHw6AK77kSM3bCSshhEGEwRCYHJ4DWN3AaydRkHCUyr2h8CiXozzpNrwyGAC8yZTDwgL6m4tGAoLQZBGEsPC3v5",
  "key7": "3eGXS67VFbL6WNHpwfJrtCJ9sjj4ELe1sR94szmoJuRrV16FiD6gcGk4NACiPybvDzyT3rrSLu3hDGiKZeR3FjaK",
  "key8": "3trk3f9hPjkMTiNsctWxPmvAnzcdA16aBtH9WxxBcApEkZMzWsrwxa1XSrpkpHtsgkvfbeSJS9mmTX3ay7xWzoUB",
  "key9": "2UHAacJqdUtLJ8EcaPaLCtHcmKHKyf9FFQxGwYKgxNSuUcU5o17gfCswRvo4QgQC9dKLBr9sqjTma9CqaqijZ89w",
  "key10": "3JTLEECHGApxhxEDZKpgpAUPWxh5ek9p29iQYyov4wxaVixZjKZYU1Jdg4xKFmRbMwSZqSieQmTmDyErziyv2duM",
  "key11": "4f7YozsRx1n2uqDrgN9yuKpY49cJW9FwfzyqwDwV4F4hnDLZoZe2SDrtPjr3q853fBQaCBP5KfeBXD2bQnTSXnvC",
  "key12": "2UFJBKMgSVoQcUA8mkghFT6P7LSLSmzdvHSTWkEUHCa7mHTin4P3Rodp9xXKw5UmFNqwhjHLnE5EjmwGJhQMsTrA",
  "key13": "2XR47RaJAZfUVzBNKbifSH1KN7QNEYRxLG1DiwpYoqB5DqDwB5n9YmBnHyc9qw9XmkJuaAz52yA4ovS1BFrmctj6",
  "key14": "2fhykd5oeXsbnzunfrdKxgdRMBGj9jXWqjq29CecvV6GwKqZMtHg9uVZ4MRn14KDStFyWDLncy6BTy983P4xzjw6",
  "key15": "2ZDmRzRY3omWdBiwboNU5rjHjQ8RSxGGi1gCV5Jrd6bE7HZoBBwbogrkNKqXFkWph8U2RsbHoxudid1bySSuTnPE",
  "key16": "4ZtAx9vCHexmuHwt4RZbTQewWgfRvQsKq9WnCqZcMcv5a4Ft4YWefz5dLPr6UcL43XDPx2UgmR2j4UAmL4XiYs3b",
  "key17": "Jvesgf3aLvcECML98rhvKujXaruPDFBgKUdwt9s6rfuzNSLn5CAP9Hio8tqKTkFej2pEGgEVSgXDwEhLxAr9Nx5",
  "key18": "2RTeZYUSGL4ZQKZpttmpeCk5ReGdsdDoEdRSo5JMzFEXzAvkFKFRUmxeN23yDPhBrnj32pZEGpod5Do7peE8y5Ld",
  "key19": "57RLMuqeiARn1hCA3xSmPwcbordGjDVUuRxDdWcLeg9i7dBt6ccATDngrUA7ZiLyg7D51Ww7MpKy9UvFth9RyxuM",
  "key20": "Ux78kiBofDeq42vFe5PwTiTvb8USip3aUrcQzzdEuzGLy1vMUzBxUGBV5o9uTZz5RRkN556BXNkDa4eqRCsTeWC",
  "key21": "5o4gcCTpqEiVWrTpUJnyQbCQhZtkwvSiDbshC6k4d4FKytLDF21Sn3s6qdwUtRwXTBVj9Cm6sniZRMFWPhTnso1S",
  "key22": "2XzQCWssxSiGWw3hqWkxWHTqwSGAATjUE5DB4SUiNYAJoGR6zcgcXTY77R3fDFMzBin1wd2yC2QiXhX4Qk2p2ofS",
  "key23": "2kaBnrQwyo1dJ2rP2e8ChCErH6xicwzJsTi4mNEBzUXFe5zc54mEUyf2BvN7tN54puwLBkMgxP6YaDxvDPGG7E8S",
  "key24": "54L2iD1957Sk9ftA6BM6uHFwYbFYw6WwSF2wqmXrbovrKHH37SfSHmKDJLDjeQbBELpuoXiQVAA9ForW83PcqMLY",
  "key25": "2pf5YWngnKwSs9m8raZ13Gu2u1MgabB5ZSbUQ8Xruw69ak3begRYtHgiXSwhCbZRxzFFDUF3JA6h26x8L7NEXqpL",
  "key26": "E82WGBiuuZD3s7kCH3dCkPei3z7m7jySGBzMJGt4j7U51odb9Ut4zitXbdnJmBDjZFCmZDhNbqsfBkRLtzqN2oN",
  "key27": "imAmkUVvU1KJBNtwFLJfhfw6Gz76w1fzuF85AcPT9ENPhtbDiNtHWYRcrq3xsdEHfjHJ7xxV6wsyiAEwXBcRrQX",
  "key28": "938PJD1tMwvpSZU3fnU3zgCwWUcHTCckviQqKuvx41zoRgbH1KsMtwjkCLABwnmPrZGXJoTsydcpc3dVFa1SJSf",
  "key29": "52J7SLCvh28uroTEZ4DvL8HYMzPqqHJSJdqLmFydVuitSVEYZcAxyYWJYHniYjSuwyy2iLwFsFzwxbfYm8wHpdxN",
  "key30": "2fGe3F4ZK1wMU6bESg3mCme6Wan9Qvr6Dz7uKgAQ2ARb9n9uexAMborxePqHbGVcfFg5jQS7oLsfUT5LC8rtphAU",
  "key31": "5LwSuUxukMZvZ4MUDSWSm7BM8xz43VE4upEAaZtZx9pCXnKcfdZsUCh8cNTvc29CfnvrfimPsRmcC39HYApU2mSq",
  "key32": "26GFqNf286p852LgREJzutVuaRfiPDrq4GS927qTXKq7qkCK42VKx3H6bPJFa6y1uD5V3vyABt7yEfxiLSZKb6fw",
  "key33": "2Lab6GNWFWkJW8ijGYK277uNrjfC3qYX1AeeTS3BsdmeHo3ZHHzbYrKNX4vQzGqChfpy7sWYVnVA52WyRPcaTXP6",
  "key34": "5uFCJvjtGc2PbF93ADAtXEmGaRgqs6xFQjHqPRNkW7DjinU54ha82H2CMC2QtUxdkEKqVFox2Q8q1yqXSUomC3C7",
  "key35": "5tLXwX5gTAWRRNEXDiNUpDjrJzK9sqC9WjSBiZ2SEf6tdHFWAz8vnE83puXVTEq9Y7Q6oDUyU7aotM5suJ4ZtLDb",
  "key36": "1TVGUwuwH3ze5HsrRHvZd7ULkKg1bXEaJ5fnsvvS3qidUgLKmbge2k59i2S3KJUqRpr6YtnnHH9C8AXHqrMN9wA"
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
