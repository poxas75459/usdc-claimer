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
    "2B6Tk3jym77WPFuns5UjzjtcBCQCmxVN6JntQRu3Fuu29cKivcr2Gi5qrSwL6gbo2jHqfNFYQK8PwsLnNcEq2fYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ij1YSWa4eNuRcW2JuwQ45ttLLf2rrBn3XDUeUjCHwjJ3LkkH5ms7irZPVHrFzN7dc5dcq1P6KbU82iLEVF1yWw",
  "key1": "4mXJEPntWXzKP3f8CUpKN5xUkpZMbcHG3tfiA4Hy9HdRsxF3ydJ2gzcQc2LGdBtkwUuvJHM9vo4hESLc8atWo1Yz",
  "key2": "2equtBw8kZAiGgjwwc53zk327zg8Umf9rDHzyoiRdXv4LhD4iD9gYDM5KmMiX1GFwsSTfAByUHS4oyABKg9LBaQN",
  "key3": "49WbkbPZu11AkgJqmBWW7zTw4Ca5pupFLE8RrzPMHTg7t5NnQuKXcUSW3PFH1GGspJTtvuhjXQjyC2zLqikoJD3V",
  "key4": "45wvw6BoQmGzyY4PrJKERriDkRPjf4Z5fx7hxhaGyoB9BqkuB6ScKUsehs3GT8RAyc2F6pq9oEEqQrLkaoHMkGTe",
  "key5": "8k2Thkihs8SAL54yQTV9umrW4SF39wqX4YxiLCS3mBgEgFPDp2Q2E7VgEGVNtBR6YszSVbNyLBkCytpaNJ5WHNH",
  "key6": "3RifG74hLV4Ec2nAxn8zBgPFihEnVoJrNnkvaouz2N2JsgRsQ1gxpygnh5L2uEovS5qfBtSa1X6DX9gpBZ1f81pU",
  "key7": "JDqZKEmJK9MKK9qVvoVE5cjPX76X5x3hwc9Vf67ssYodj4ujUXSvdZnMyHACZ6NRBtYe83dLqot2q8L8JvwnJYH",
  "key8": "4EJ3bLq2SZwmfx4Di7chpzrV7sq4RXeefgjWTTWTpWFJfaur8L2KxyznPfuVeLL5TYboHA9tueJzL7xA3zyBbRDj",
  "key9": "41YJHuxy2zD4kz5173MFJweKkvK53eaUdTqU8Ft6b6yLmw3UB39hNXPaxgwQTugriRy24JK9HAZqyfGwF9advZTo",
  "key10": "674JuySrDSe4FHqT2RUyAtygy5kn1rsSNnYQRLdVcMwVTXN8hEzTT9pivbZmrRH1dLBPt6ptL5iMAYEjL2Mj21AU",
  "key11": "54BbMdbGfNzTX1CoFMBvRpqbPbhWFwZrvmkffz6kMXAKZBc3Ra8AXt7kDgqJyPzpnw1i1Y15PrNVGCYmhi4DeeDx",
  "key12": "2TUB3ndLnVzc2Cfbxq4EJY6oPR7yK1851ReK5x8hJ1mCgyJShzDsnGCNj1D3KRJK5hGMwDJsg2YGjiKCERjDZuL7",
  "key13": "3gzX7HWMWfCkbftwKRDx7Ugkr7bWPUFiu9w76rQCr5JFZFbFEaaVXYXgrccjkyzxAurYEcmVRUDGpiYwmoQAWA4K",
  "key14": "3o3k1THYfWijHz5piX9AExXBB2DBeyNSRLfnZkmVCkYNc3sy1d8gVe7tLdBewCm6VnxZ5LT82r9Kg575o7CHN7xr",
  "key15": "mN1WCbDSt3zKRojbmZXScTRpW4wfKZL1b25uqQ4sQnwhbEmRD9kPsZMbaQx4vB2nQ7kwuSpHu25QJKZvGsz1o31",
  "key16": "qkQhEtrFH9E4RTDFPXg3mNpMe4gtKuJX3mE82i6nuDhWyHwXi9nN97CVRtcQVXdb2MrwDqarh1N6XrjLbn441jw",
  "key17": "2BiiJBktDCrYW5cosYtcCLK4URjWKUZTdxG5PYbkU69nqqfSFNqTEoNRBm6KyCoCEjTmnzzfoykx5uAmSUMMgzPm",
  "key18": "2LwJW4vuFewdrMkefYqgquTHtkKUDQ3fJhgP4qM39py16LnTSEFfc2mntNAcUbdB5A5DzWe7GtrQZ4CbMhc3PRac",
  "key19": "3GzvXDqCnUm8L72N3QAgd5u6qZ4HhorxgwC85ktLw7UaY16sXGFWHLiyNzUCMhtHnzsLu6eDyuEsXwUU884yAhDn",
  "key20": "2Bk3pR6RCDeq9y325wsFSKZExwPeYSdh9eFechgAtgi4bJjHBSRyRufT9LZy2Ns4FNFj9SeqBBXTR8wLsVe5zB9C",
  "key21": "2bVLb9sdkyJ3242CPTxQuKLUY9CThGGpXLxMp2aaNnhXsemBLDpcRqsigWput43vkPPWqA7cW7nfNXwxymzrqHHz",
  "key22": "433w9DArXpher3jLab3oiP5jW98wHkeuos4JtDZ7r8U7PS2MUV8HoRomKRiiesbbtGULAvH8GkP9eUm9WVcYEzq3",
  "key23": "31LVNorovMnHpNYn53NE9jG56SwitTgCSjY66kfkTCEmwQd92tcPp9Xzztvje39BANFWcm8fixhQrE4NeYJQwsgG",
  "key24": "4aDtkRLhSHuJFPfrxKBEVbbEcYjD66pZkrLLwYKpMNdVBM6BqjNk9WUTHZrkyE1rnPhCqn3VWeYrghL8dCgYnBR9",
  "key25": "5fCcVGGZEkdR1Vc4JJ5DwqixfdRQV2oJW2uFCHoKWMGTUnV8vuFeg8WuxQF93XeRHQ5T91VjewnFgCSbcax5BWjw",
  "key26": "25AE2QFA728ADfQhBCH6iyxXsMaqbjMumwY6qqnqCTcoGByefXHRr3Lwv71azEhKd9osxpeYUzv1tMJobahYMfky",
  "key27": "4KLzhSvCCxNEszMV6Gf6ttpErhQTZfwPUi4iczxw2DuuBG9p71VsKmT5pZGGqwkzTcvWkUmagMBK9eV7gTHdYLmk",
  "key28": "Byeke191HEjvDmexELfiXdVBygotMwv2cEBDLQ7PVckbEWQC1RwWa8Uxf8fdyKumbrqbJuqpQc9HPKUge6qJfym",
  "key29": "3hVCuxvnYbg3QWMRmXiGCK3RQ1gKSBxJo7rDT89qAXJ65zv9jPfjXu72n1x6ZQquxYqniozE9PVHi2NC159bmYFJ",
  "key30": "5NoHwaeprew2fZi7Z8aAnkFude5hFFSvtaHaaQU463fJnaeBt1aE2tvprQsDPYTpzJi6m7o7hh5p7QMd7bSzed33",
  "key31": "dPpxK1V1XFbjjiJqzyC6ABbTKpHEmw5XSf97aKe8Y8ncALyKnxezFXuyeNhD9sEor5BB9MmeK7uQ9WfmtLnznxT",
  "key32": "5m5sM5cstCgXHj1FxTQ9RwCub78pFcewiK6hwLqART3ghCwK4YiLRDMZiKvBkVmBPVPH8TjRScvaWNrhiHpEFYzA",
  "key33": "3ncW7WXSfp1LWKxH71n6Anx8GcUenAquqvm8bkHEcih9cBCMAGW3gajYpk5ny2YHj5zRJ2AMWb8yrW8vuC2mBGZu",
  "key34": "5KKdTMpXT89d8QGAcWxRRKY1VBv7zczyF3MSsnZQTAb75yqp3fL1eQFPXUVJDvq5xHCzx9ryDoGcsJLRu56u4R91"
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
