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
    "4sbWAPUGJXWqNEiccPrw1mGVkWbNWq6DrawPzsjCZmLBSRQVuSGJRxYJx8HypWr54Y9YGqDkboCYScSWJ6fFwcpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DXCAAQNBMc9nuissBTWXPmYwL7oNuyoZDF75jBibtcDM85wYdPCPvetLUi6z6xuRLF3hvqfn1KLAn6TZU5ft1K",
  "key1": "2QQBotKRSP56sr8y9gJgnD6XmVAare8wz1oGUuabuTyBSVJh8q5wwaVWWFf2624RZfPXDuxaexnunE3Am37LgSZz",
  "key2": "3D6im21GwafbxmFR1Dae37Nf27ybAD7BG2XHgkd7D7AmQ8pzJpY8qkxrkewCyGrzfNw3LkqGAxvFX6babX8asRP8",
  "key3": "7JTdsxNiheXFnnom7wjRy16QDfErGv3DMeDbaPjYr3oLRTdKZTfBm3mp5S2LVK4Nwow4j2jDCs5dVwRG3SToV8k",
  "key4": "65kLVvuAx3XkpsbS7NRxiXHABQRh7TrpgJzjWA8i2mpQhxqd6YbkKLzvU99TFGVKwXLreGFWEn5MLeG7wiE4qSrf",
  "key5": "3wT1txijnDE8k5MRz5i1JzZkqGVKH6Fa7Eu3u9xkfpTW1QfAjifRWbH72hUH3nHuWLAxXi85E8prb7CeGCHQKmxV",
  "key6": "4HqREN9LaZJi8wgSeNpaH9mBfSPCJjQyghTJrr1J5H91g7X54XG33g6beiwEizMpiBvpyxNjiqwusj7SSkxYEHoY",
  "key7": "5Nn3s6gnVnrKgtg4pGL4avtva1gMzhcSetEgM6ufVuPwaeuMW1X8h5u4nmteb2C4XTUzW882E74Sx1dhrRbp8qxs",
  "key8": "5nH2wbqtZoYp4op4vpKhN7mptVQzZFs4X3dywchANSFwub998yDUE87QvRULMujMnt1KA6E6DWurAvGHu89zFtqB",
  "key9": "26nUFriLdSu3Zq1tgwF59jrgdBBNJwAMXoYCYwiKeSic1R5mwJUW2LCejw5LLbWA1N4kK9drstp41rJKXasAKHe7",
  "key10": "5Qj3KNba2huWDMEGy3BEFokZf4LTbqSGvsPHt3fVG8FVbWEvZdKoU9hocQeA9NXkrz8Rhu8vv1xmZM9yvH2xPvuv",
  "key11": "XzkJRCUi26FoJkMR8Ffei56PsaCEKzXdLkURkKo4PSmu6LMdHXjqWvi4xnN21nwi1xLP65rpmpik925XBaHCE6Q",
  "key12": "2zBYEn1ht9rCizAyDt4V2qcvjoB2cWcgL8MLXLEsevdAvzspTAYLuZqqffVPVwDMBVJiQZ8DoqH6MDMz5hGHNKxw",
  "key13": "5155KuDkJni3aZexiudDL4WQmamEVBYQYiGvo5qTXDXXwRcMmBtcX886B79S2LdYQcCx7VACbmRgtMbBU18VpFdG",
  "key14": "kpKbFpzBFKZcyaNGXz1kJiN6puoMzLMype5rw4B9T2X1eTUMK9PBNSNgQ3EaTmi5tWENKYFAXNepMvkbymo4SSB",
  "key15": "2r9xcS2zchQx6Ma54ag2pcR8zbeZZ1KGmdcTeLvodWBExjFnNFKAgS5ZGTgX3LaEbDfMNcVAwSakmqVQmyCefSom",
  "key16": "2repcEtmKDvh8xp7TiLZs445uTUg6whcK1jPabN5gC2dyk5xsY5rHXErjdcpN6Exz9eTrJf8BkNz7TPd8LMtWt26",
  "key17": "66A4Dne8hoX3dC3mFsesEgS4QGyGYaEju6JoyB7T2wNiA7aH4UHnrdnvf3V5kbp314cCJCuQBzW1wjjZfSrEyT3F",
  "key18": "5mFoJuxiqS8jvDgwwjNDW8fsMeDe8JnHupLskFECvmouuZajjbKMj1W6yBTUez7SNDgCpAi3eLu1azmuqxBw5YbQ",
  "key19": "tSxGYJz566Wy4TKnK575SwcDoDBpztLJYnRYGaWwULuBmFKF9sugdtctwvQrCb89HVReqMudPfy5pnLCJ8Dwz8v",
  "key20": "3U4cXkphNkoYYs8jVg4xVE6ekFXhvTKC2WVEv6NVv38dfHf4e3irobFVsTdY9ouL5u8eyMLTGH3P93QE6fSxzB8P",
  "key21": "2MaVBnC71DgKKPvUkP9U2MGWddBkY5XvQ1irjZ6SyhkBP7YgGPZXoU3vSn5EokzBfEnM7EgKVHd2zGdoXeVBMxQE",
  "key22": "433ndYb4v7JghSkErUGDt8U8guPu2cxPwoMUYTwc4amR4nghEH1Mq6yjQjanwhQXprWsNPSYrad8j4qghswknbnX",
  "key23": "4T58mhYGdVknEtQrGifnMKCKArsj6nE1Q9FegQcqcGXpTou4aR2db1qQ5PBgv4uexC3RU38RvDEPo1mnzPSytKu2",
  "key24": "5sPZm3yoTRXo7CwVqoofJF9cpak1c8svEiCS3cpUNzc5bxc6wpoo5s254FFCau2xZcEuzFGomxFsJBpi6NYWzCxw",
  "key25": "5GaiJUYLPDaXwBTSe5LG8HSMyFGDoAUPTVmtGFE3f1Zyh3npvK5w2KaYWrQkZ3PkkrKwXEwF9C7GVHVokrttGiWr",
  "key26": "5pNoExezQsqZwzcqUGAb6UPk2inzfkkPYk19bB56QdCgJuSt96q7qL5gqFcY9LNG2ZQoMSwXQhvFykznZbu2Y24P",
  "key27": "61zZBR9BP97SSCArhfPtpZp65Sa574DKWrsjSbKv6mfr8oo2MQGwXCEzJNkuKRuJUKXCcdKEPLuQJxfTdFWUwSze",
  "key28": "rYZgoA4L7r52BggwM4TpFfyLB52X3XSjuUKsuxXX5ovnP77Re7G1ZSFUnY9fe1GZqMNRi4ZjBSFmgH9hUgfzRS5",
  "key29": "2agKa599yQ6J5WE7ZczLYejpPbGVLQecAM6QBBUNVGN3U95vmv5MTFc98J2UGvtFr5itYzZpiksw5eK242tSjv6q",
  "key30": "5nRuMizMkzpVMLHU7qkn5s94R7FPo26fdZRizMvW2m52jNzub3nPQwGBaSsQhv6ygv1hVfWQbt1fzpUrzkdn7wME",
  "key31": "CwP6RHXeP1B2xFsaDcdFqUGXxXxqRxmBHfP5w2Q7sTMXKCkwY8ZSULsmRMSN1snHc19XcUsGN6tusFtb316dUJa",
  "key32": "kxvk7oKxduAPtbcmsEDWEwjDzb7QCF1pjssJ3jW82Q4Da5UcSNfnyU2Csqztgob9AzXPkoao2PwHxMoYF4bVtPL",
  "key33": "FA6EntVisKgXoTcCJDKf9s5ypnLeqV95RZJwYGUrHsBu8u9xGmupTmoKhQxQviFZByFHRqVPjdJG24xjJQKtWo2",
  "key34": "5u67JtDKc6ziMxfYBRRxijEhf971zRSBNm5kAdx3R9wZY39gUM6EuVBQ7rTdxEUt2SSFjUmj8E8vrxrUsbTVdxCi"
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
