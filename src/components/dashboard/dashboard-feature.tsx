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
    "2neyDxWVgMrqs3BmLc6CnC3NGkKeSpvZYoK937KfSp411qkt98WcpgjaLA1829XB2fKTFG4RrFKmZzT48ydfjW9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUcoKpvCK4Bgxo8vh6oNtooT8DhB6WLXG2CP5bi4LZKaifaw9NKQ8aB8c2eABSRSjm65ZPb2YgESVsLVduayoZv",
  "key1": "4aBZYoa8zPruvLt4qFbDBSprDUGsRshc5AhhKYpMJxeMgZwpjYxfUrRQhp5UDqvW9fbRPwydjCj2MyuDzKy2xfzz",
  "key2": "4gwyfipdaPijnv8UF9tRFtQYQMdSW46PoyYp2gjiPyUhcZkbGcRSC8u9v24KoeAWQWJhh9jzvJKaNBV3GuUbp4uf",
  "key3": "443wuHywJokztxFpmxMFWZJFf2SA4AgoGpLw3wKsfb1d2Uav1Y4985jqLTSE47Ri2zkEVW7wyRn2wYy4Zmci6UsH",
  "key4": "3B9ikVRZPCnEyjUheQ7QF62aNPpAYe4ejBC95EMUSBtdsJHi7tGgMrzYGaFPDYCckMD1AM1uXKAZnAK79QUad6pZ",
  "key5": "3vrCawAZyqeyRm7seJANqhVL4F3efi8tkzskxgEAoHsTjqsBJU57dUwrY6dY9NiJoEAPeamU5iD41n3kpJ88k3Yp",
  "key6": "35kP9auDLvE8iyeLHd6dZJujiTSBkPz2DMYLGQJYza7VzYm3yfr6ThUDbV8MHJTZ6isJ1a1X3hXNY7SEp5YUNDTQ",
  "key7": "2TAEc7RzHUUuruwUs4X1TjsYorz1kvEA3NJRgG4v3TAWp5XpT5ue2wgLxJJoWLWvPoZGoRntyQjCE3S5i9aeoDGp",
  "key8": "24zkA5unAPNNUGoN1aGUoxqinuC9SY6zDy8cUSBjxya3wfqB7sBmEaP5Ebm8Gw8YVPoQifzKe1wbLZmv4XzqH5kQ",
  "key9": "5bSiM9tHuzBZA9SQLakALd72MYWvbmLaijDHshSYs4NDCojyeHCATQSE1r89oNyK7VKhSbpmrUmAdjb9ZYEVZWTS",
  "key10": "65t8kS5btys4qLfNghYTCGvg2zGTfacyj6R9nSK4S5mMY4DnSDKWx1VBVoQftzst8cW3bKq2D4N47hq8dv2R3Wj",
  "key11": "43babJhnXsDFxk5mJy97hF6i3LucA8LxKti114egRnJsuzLtXjd8et2aXJpiiUeR4ZhoAtJq2RDfVrPcdvgFChSB",
  "key12": "3GrRhAysWxhUsbApiy9STzvKAaFU1HY3MTPce89NTZLgimXBqYAaEvMdsfMHXn8eBZ7J57bA5bbdtbbHW22jSd6y",
  "key13": "36okbCrB1Tq2yv4qEdySZYtCYvTAYdfECYBXeHDpxZgTTW8GN4hpgBwAeC2EsHScY7pkznFQBnmAD6neS728fE3e",
  "key14": "op4JmDr3ZxkxqMzstaZ5wjvRAhqRCpqT4tdDUV9UMN3zjdPVd3CJrRGkHu7hXvzn1SDN1p33wa5s7eX8aLovTo3",
  "key15": "Cdnh7PKRLDxu6Rm9323QqxPGG8QvJK5gF8K6VVGtMng83nhPbqh9JfxBxvR2rwxzX2FsQ4UtAVQRTn2i7UNvEnY",
  "key16": "2AcUaDYqpkT7sCzpt7Zh5ibC7SPSqVxSNJKZNNuJk9pBawdUHA5Lb5nhjhJfgd9HDR3rHTjA1KQSGehstAGGJ23r",
  "key17": "2ueohWNopkpgQ5Sd7o8kuMzWuatmSRvZLimJWDsm9ct4udGqTmEEZXrBUGubUpaUjJ7mmgWkZgrHRwmpaguNCGy4",
  "key18": "3q9DXjVXSgtwRFrp6Sd6pzBNKRMJsRGmu79fMbSnARG9XhEyjKzePVqrquby52uutWDULcJD34nEkwKPstoUbtBX",
  "key19": "2BD7hbJpNzfoGcDgThpCQfSsqAxcVNvHqpTbzcfVsRs9nRRAkkmx7epJXAu75qZAu6NgMtoLPVfEF7TLebtj5Zme",
  "key20": "5jfaESo4yY3nij5sqMovxs6woKJ9gkhKXhZhasVPyYmvjxQyJzrK3v3kxCAtTdc8dZTfYSvpAfBVyxTzoVA7X69U",
  "key21": "3qLUZP73wKgkYbYE9NXU24iyzgZoHuXCtbGfkbJNRDjyZfFcx3L1kVcLfvVoL9aQnBNdH2VEDKe34r7ov3YbohNA",
  "key22": "4aFaTudQqfV87MWk947zQuELNKoN9vWByfzsevj8NEt3NWUNHiw4GUtP4AnKeSNuw82KX4XVavwsVQPsabfGKKuN",
  "key23": "2YKsgQbYn7JxorYuShmAuURy2jUUqivFf17L5vx89ZRSzKoFDmpWCpCS922B7UrA882X5KHkgCUeitj3jKQeY25t",
  "key24": "2YzLjoQzdW4crNgyXzLMnnA32uj746vsz6AAxsF7DFzMcwNEiemuaHbvQnG3fwVw3FrPyW3JgXK262PbseQfd7v8",
  "key25": "2pcEoKtYcfksehHGdjUuJ74gzKoC6KbYJWqZL1jkUFKtXKpcbRzFLFw6gf8oLb91FUMQviQRM9i3L89EJfqu2BaX",
  "key26": "3ia6AySvUBCgPoQDRzfrqqMqdzAJCiHMxh4cJM7yDiDX4Ba5YLtBiaBjkFqW8WnrdL89ecd7tCs675GRks52nGah",
  "key27": "2nD7XrGzQP7YWNrcbH6gHzgj9VMRxd8bwPSsGJLG2hJJvCgAS9D9uUjPAMYn1fTmq6NnSqBR2DRprDNkVCoKvPj9",
  "key28": "5Dha53vxLm5RXCf4AuQqGkkDJ2upQqsAeNecxG3Dht8JWHXkjGEoE7qSUaXr5YaSMGVFRPv8eTMZ4nLCwsKZYARa",
  "key29": "2Ww9RuYj7wMF4XRHPshvGVPAUriiU3PknHzZyiZecaYkiZQsbGMwDAWrfVnTgZRhMMCh5b2vDqjpqK45iyJGWPXX",
  "key30": "3UTKZ7yTFQN8FyjmdkLeaT976EArd3w7rEZGRHL2sqTEHXeebrAQ8B3vt3KE56ZQ7rtBPNYqt1LrmgcG1T2YczMU",
  "key31": "3JMqLMudbLkPjMiVdsWcDWf9xsfbBU5Qm1LbShHv5eUrvSoF6sRBH74hx5aWGUfZE7wzPkCeu7JoFEBPtCMBXvVC",
  "key32": "64Y8ftAcqHXBUi3jSAezX3dzMykb6Tj45eSjE18MPyiAkzZTPqaDt3JRh9jyUrxGgPSW4vN9vGeKXtpjarafbn4d",
  "key33": "4rcpzWCFFwzNnvo5k6f3J5EJP5NRaftYF9zfCeDuYMkJCFqXxrB1TLgp82DxGACEMJVLwgEeg8zWADDtRmHVWaW2"
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
