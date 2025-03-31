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
    "P1mBfSfrQfDQbcFL1bu8Ty1G2oN7jwYdZQDxeJhykxtdy5soDA1tRrF49cwcz6UZjXMAXJYjf4E5H35akiskAHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qi8eFPgqvKYQAXtG3AptTjUaV7t8hnRWTdB7xrUQ47qZ369zbXvrDxyL5gmBn9Y6rNNGab6o9Zmz1dfLeJSam7Q",
  "key1": "2nbZTavAvkMwp7DQBbqZkuXaPWastPkv7VajSpc3iptVnPwFXHfsXdJxsMPKE38bsbQ4wPcn4LBo3hX7MRwb7RzU",
  "key2": "5hAECiYM4QmFQannp3Ra9WpDr94LgKLB7xsVYaAoKm8wvcQzZ57pJveSd73wo51RiBstFV2HPrPL5zxtFgCRBajL",
  "key3": "3RYLnBMd2PX73VfVNpChHzGURoXpviJAm6GToD1Nj4LW1eiPEKtEeSKTVbB675Xzg9CiGHPt2pK2RhWL4v1pkWMj",
  "key4": "4tKUYaqdpznBpfEh4qw2gsGtjKVBEmMmCYg4YTiHBL2uTGHDwieEVKG6DY5fUfvcCATBydBayEP2Pet9adMtCQKE",
  "key5": "3YaPtZu4MEirETbHVCuJVFfX8zKjRNaPqZKc3kMuB4ivpbFBGmjRQ7u1oYCdECiARezpJR3sxVhnaRbZmZQLyYUi",
  "key6": "5eZNZVXyi7ox9DnhPwM4fcX5Nt2SKfms7qsGuURWeWZnXRxRyKD1GeGdAyj4Gb4eecMn1CDXweqz7rmwQm8AAK9b",
  "key7": "XfHbxJ8XNFqVTCnJMs3kXKzZkAUEsVSTvqzDnQN2WnoYCpnKzvo1nUkKhXGMKD93YqnqRKW1ArBZPe5S2oc8ZXS",
  "key8": "kSTneJiSwJ6ZMxKTqJebBrMneuWXX1t4k4ywiC8Fv69jBZn7kjWQtA8FM9iHFgVpNioMLT9T5pxmbrb7HaEDryd",
  "key9": "3udcrRP9a7snERUTg8h1K2amQtg7XFqRc6dvkbu32Cv71zHXbPwQNrpR4jx2QVzmhmrBuJvBHXjvQFLgzsnjoHNu",
  "key10": "5uP9Gp2gzSFDuzWmgdrgTVWLTSe188CAFeQHq5NccyPFJ8CTDp7ZCs52UBg6j6E8tyJ6iUcyMp3p8TWjJScEzZ2E",
  "key11": "3k8Y2VSCHDNWxGLVPSnhCjVLJkBgYouurbHgdaHGy2w4wsmzj61wwj3ogqY7R66zuXzJhqiqQdzBvYBBT2goxErN",
  "key12": "2c4xvLn6XXYVwyjPPtJg2iMFmmobtMSBvEFYCxhvLugBo59spJHBDVz1RmhohDWpKkrb9pLZvCiQCkfozdgrAoyz",
  "key13": "5naiMCRXtsyL24qmLY7EqjT2sUVWTLD5rDMjcSLaaiVJvtBBARfYa66YMkTb23nwctfmxdyhdhGirk3bY9iPkk9n",
  "key14": "2W5Wa5HGEpReNHquQZR4rX253k1woonpRwY31o52U3eXQXqjftus2wjxFp2ksCBP8XRqrcjwdvcmhxf4y2u1sHWu",
  "key15": "395w39QrzCrHGLVt9FKiwNhBRMx9yz7uDxjBdkAFSMQ7SUXhfab3cvp1u3iZqHi7U2yR4avDFS4KvowQjBJiegH9",
  "key16": "2Y6ezQZzmfH3gvvUqonXPFpzisiA5TfURhi3paqKBeUZtdZ5pEKvhD9oU6SkUvMGRJC8FWVwsvRwcmsPAEujEk7a",
  "key17": "5sVBJh1AeQqJyt6nwgzbBNM2NHNRJw6FeEDeVXHM1WJGjTL9mhDQsCqM7thYrZ6emDiG7FD4ModZTDVYD7UJpRt3",
  "key18": "2Vfu1jK3hwK1Dh1vSJqtxUPktN1fUFhigY7fDhfjN47wnex98XNvywsNCxdy4dTDsabDbU4sZaxMoQwZ3QrL6oCm",
  "key19": "5QWTNxqZGMhSSdAfuhdcM83qGfo1SsCgbdKqPSJfvnFyaHmq3861x5oxHWRYKuXPhyJBm7GvXPxPW9PnApJKrAvt",
  "key20": "2V4VEmS8oKyZYXswGgGeeqW8wpHCzGDYZAo8FzT1tBDesuhhfgmxaN3A8G8ab5st6wb4K6mp81v3XWZVdgF9XnhM",
  "key21": "5mDUQtBZcYjzcSCRJM6gM5jTX7DuJEKeh6NsadserQxiCr3BRtLhXLgBkqUzgwE3AbdRnbWVA4tyoPhnMBLSZXyd",
  "key22": "apEGbiaAW9rthMnG9GiiydFdLEVvxHTrsGtTxuWgri7tMNHUAhzdf3kpMzYdPVUDo28ERehJeFeJkQ9QSkiiWM6",
  "key23": "32b2Zj5WhV1WPN9F6C3ZQr6NfCaHwNJhmLvVukNTg6kPgUm9y617eV9aUNyFyEf9gkkYqQHuT5WLyBeymzg7m1Mx",
  "key24": "3hcxRDLcaQgL89isJXNTEdvRtzpMhBF49bXgeBbAxEdnkprf9NK7gUvhvmbx1uXs6J29xvXSUb8f2GEVMJ3guu94",
  "key25": "4jfsnc9fZgat1wk1izR4qmLtqud6Nm2bLEfSNUjFNnBgT2UmQoYAFLcgXfKaozttbEQbUtNwsbWKNsk1gWtvXGr1",
  "key26": "2sFkb1yDVZuEb3ELncSPGQowf21RRUsiE9mMBnMW8WGLDTqRMoumKdDSLSJVSzNWZiqad1X7P4q2d4bnUQBtoxZx",
  "key27": "2hoqb3R4NNDjxCA8cvMUXR2YNZygawz7KwLqN2bMLTMRUV18Z4iMsiy29K4WFXM2i9DUaPZB4aavbDNws3pmzJmT",
  "key28": "2JKgZchsfEX5vcDaChPxyPEWceUbczGT6AbCevHQVvRekZmq7dhzKdy8SBUKbkYXbD4Y1QwTkU4e8LHm1XbFjbcZ",
  "key29": "4vSG5nNtKGBZfhFjZ5HmgGJkPjzJH6DPWJuChrH2gSH99RJYBGgPmkRPLMvJrE3Z4U5D3ZPzJyzc2xW3CbV7MrCA",
  "key30": "z2GgYbqNScNnV3rXeRD5bvPa7WsumJTrLu4pUjXq5yECCLkLQU12gFXZcjJtnVucxhqNxdaMpNRV7FqBcEExMFa",
  "key31": "2tLbT1CjgHrdKPbFgSjYCCGKH98yFzFqJjxJErgJJyBD2kFiCPrMULaDeWKNRFsgNKDsgjAX6SeEy4HrCnbaqWPM",
  "key32": "2YL1KdFdB9ur2jgBrPNGVfdYKSDoL8kFrZzEfVrrdNouUQR5qXhijaDhdKCtzZDyVvBRuKmbweCfX7WxkrnvTG3H",
  "key33": "5BZEVwkrzVfioMiniH1sMukBSfAAFPv2N6B6FaxJ6URrjfPVMpfSfYnYFMwePXk6bg5fYMVxbmam8UYBWY5PWfV9",
  "key34": "JoTjMMoAqocKRjdGW1UspFGxH7A3sqBgaiJYMJwchW3GWt4tBxjFs1hBF6L1ZUSMedkMjYyh3JrVuHi9QW9MudZ",
  "key35": "5ETXq8NGfJ7JFuVtBy27ZxZntFiphJk7rp8SHJ79TRDHihXa7YgFG6W9FESs44EpiYGD8ggFbf9pB8KnuvGbYdPP",
  "key36": "3WFpVnaw9gzzubX5hsfCDoUpsvugaGmfdCwYNXnjBvMuB6BwJQPkFJgbkMrUn3azrxQKVy2kJyhZG7oziP3N4mvi",
  "key37": "Ny9DW1iwJHf2dwBEUV3rqiUzQzhshEzam2x6Hx79hncyP173B8AvUg2j1csCy7KQ9761RFWZ8TXJDB5xLRJZrzx",
  "key38": "6iuskbWueEtGgTg5R7ZnKnNvH7zfBYh4TY9xU5jYKUofQ6dWitFiRvKvoo4ecQG1AaSSJpgXDBjgymStBKSx4ZE",
  "key39": "2hwDRkpmWSP41iAyXeT5GnJsZ9f7pwLoWT7yYf9eF3x3PCB3rv2E8xbfFXsmbNUH4zfoxEeuExKqXJZjstJHWK5d",
  "key40": "3AKDX5yjCaDvNbEWx1ihYSyNYeh9KUspQF3VUWjuF5q9XySA176wWytMoStURgLnbUYVrXK8rFVnVjYtA4FWX3ux",
  "key41": "2uak8GNWsbzR86TbMcznmNMFm133xhLMsoWGptCr65dk3e93t6VR1cdNHW8HN9AGE1PrDZoPuiUKVckKS2RaA65x"
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
