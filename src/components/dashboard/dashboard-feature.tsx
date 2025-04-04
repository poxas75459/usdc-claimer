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
    "2VzUiuC3NndQDfZdQkdv4DJc8hLRHynkWCCVyoKKibu2HyZu7JMZrqCpaYbvynSSxLdHoJ7h52JJAzdXdpMKqVoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pfPQevp93RbCYZDF5XKCeUb1NStx4wqDkCiScBHKY1SvDGmFX3ozNXftUukDsnRcuboq6VLUiu6yyA5PcfT6X3j",
  "key1": "4z3YPPWQfaBbUpBmSCHaqNj5HcKLLwJYMFN8Cn5LfHqTUgwUBmJhnCewrun7zhLeLa9YgRiyGqEYnYWNTAPTtihy",
  "key2": "ep44xWsC4HW3zq1E3TYH4i3bHihYTrUP72E5oWXx2mC3HK2Ke6aLWW3CiGb9vDDtPohs17tk2yB3mF4BqvYn9JN",
  "key3": "55rZaE8VB6PLJgXRc8sXWce6tvyhDczBkHmCBdNzWQfSVc8AFYrv3KVxZL5qav89ZKiSCMTNhiXgtjxVMFtyudot",
  "key4": "31vVtA3fjbcb8dYp4pLkXqYaB6s83CpygHcqD6FtzvKTptWtH44s4vi3hh7dGGSPuddTi5V8zsipwfa3yRfmqiCq",
  "key5": "2vam6TtxBgBkYs1VKUt2uHaRtSZVvhBZDeMzdPNtB3c2K57Nqsmafrg279A7ALqbBon4GXHgEmujSVTf7vEuHLHG",
  "key6": "5dQMCdYz4HjCDFnnNVbi15TLHi9Bmv1jQ9M6pa4KdPVsqdjSKkcozGf96cNeyc2Ri5Am7tA3QnfWhrDd2ZhqmCvB",
  "key7": "3M919YJVzH2gaBP71fBwGEqSP5rSteSbpwsEWqycX12UPbicjhfKKbrTfTWdp5v6K9piEmXWW9zmPa7VF8QDzH24",
  "key8": "RNRGNHzA6X9hFYYN4NVyUfyvM9Fjzfb1D7897dBZnRbxY9JHeSz6ZRbT2vF6yvBQrfvxLSEjojvCVZkcXyoUAFo",
  "key9": "2c2BFHPXerhBvNPeZ7DggVA1wk4eTGdu7Tv9ENx3oF2YRKbLMaytw3wLET9n9LnH7jHuAhhgud8xP3dkGxtaLwTk",
  "key10": "25kcqgJJ4gdxNDBkWFEb6gvp5fZ4y5DhCtRgN8m5Rjap9L8LeWfqYSSaC9GiuGdZbsof7Bn6vtGwF9ZkrZbzj7H4",
  "key11": "57RUhtmFEVi7rzM1aZ6x4SS66Akq8QhaYDfr36jvU1SZDi8McDmrPg5sMQB7mDHEK1ybRCbxU5iQpdczUSSGb49t",
  "key12": "4MgmanHyoKPF4AyT6r3s8SDcSJMam2g8hgnt8hRoWptuwSzbCzjRfLxeqxeQYbr1uz3gkTvk9svtCGtyPN37Bm1w",
  "key13": "5X54fVpccqvqVCmYpPeVL15obtvNm9ApfxoHkQ82zkr3qyUSn2pPRzAET8bATDkHvhtkZdhNN8RSrgzyHguUp3nU",
  "key14": "2gdaPyvNfwSMpzMiyKz68GL9YjY5VYtjq1br2KaJ8tf8UdLYAThjY1xa3xvmgGoUmu2iYLBW5exfnEcs7RW3hzEb",
  "key15": "5vRk3aLoALR5mGuKfsxhtRgcYfQaoj64Wo76xWnALPWimhYcLzWsNN4wXLphFkQXfngsiQXV5cYNC7nAs6Nd2wMH",
  "key16": "gs3nD6vN4uEca2xY6qngYxHjkkxLXCwpbWqJQNF6NHpKft4bKHvC1DMC52cGZ9qZFqaVNH8ernu4o3AaPje286k",
  "key17": "4bnz9j1hwEdk4kssUdFFDfexcPW74XoRErKxmSfqss8YgEE3YrvnmjCrKbXDN7VYwdUcmXTmKqcVygdayDSMXSy6",
  "key18": "5bf4THYFWZzc7wogYvmNYsZgR9wC6xMw6fzr7VGo192HLEWmM1BFNrV5MgTAYtFWrHsAsgh42aZQV8mf8VBAgnbz",
  "key19": "3zuFonMFvEsFZ6MV4iV9E3evdHBJrjCHcpJNLErgExWYES7i2YXA41zDCZQko4Fme5YAcWhCxwjTZ6kTdQ9U3uHX",
  "key20": "4DgitzGLFRDWk2SwJYiGoD3WXyMkVDS1bpqZ6ixSgPT1T1oi25YYjHpqHFX7AhJkBtLhKVJzRFd9fb2hjDMG1T8",
  "key21": "5mmaLPPkbV3H1u8MjgP2zuhaQrzqBBf6HHNPqYNMYY7X3J2NopV9txFzBc2jxTb2o93F7bH32qfPhkxeoZTYBp6U",
  "key22": "3X7cDbfnhQGDnk5Ld8ad9aKkaGHecg6iuQmAtBVKgnfNQyVZKF5sXktJezQqgefaezxDNwFYSxZb5ytadT7RW2JG",
  "key23": "5PWGC4yd2AqLcL1zwGBhDdmL4v7uyDBaos8SAJW6eUcvzfkhbtWPYWin5n7yGERAtTticqHKvzF8yDZSb1CgN5dn",
  "key24": "4mxjq1kS6tnWhAaHQH82Wj65Ehq6tAWeWN6HhrBLmKcYppyULn1DUEyS3RtYcV8Q4efoypL5rWBWBhyQhavZsWZV",
  "key25": "3QPpkgXsPpVmhsWgXCx7GFQRdUNdN9HvL8qqTqRtQ1P4Q1LXSHLnkoQ75X6ehPBGLLTnxvSm5bMhDFdSr8usA7gN",
  "key26": "5tKrmNhL4SXduZ4VhssmE3NYE41fRvmD4TUCtf4hUL9wcZr8BU8FggBH3b3u9DXJ39kL2RwUXYrWcozaN9wrKpm5",
  "key27": "5o8RK9C74HVaiemP2gf91pNXVHMypdmawjCQQBJBBT7ku4xn2kX7Ha1C1vMLU7jEve3W56qBathGWaLx7bjjqjsh",
  "key28": "2S9gYh53hj5PWrQ63WoAN7Ap4TBnWKC5LJXoBD4gyPC81Md6HM9N8oHgwrsD1wTk8dQhpjNZ3uzGBGRLm6DfQGhD",
  "key29": "5irBr3GomWrzYHoSoKEKcPvbpcajsRcCxLTtrQrdsXCuiUuqyNcVtW4s8fednNjxB1qCkdHsQvUTa3iaq9tqvRJ7",
  "key30": "5fXJz3qdfqHpWJmkUrsy4tJSMEWG6m6K1D6oUVd36dzajFd5a9oRSUJUUcCGVe3Mwfrg6froQ7gt3r4vVrGVZ4j"
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
