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
    "58TamnzrtVvoyE6trR9rNn8vtzPLyXtGQ2R3ePwU91hPjizWvHdMK2Bo5iToqqs4r6GVEXxW5XjDYt9MYqAyBfoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnmTAmFpp5eb6CoCuDDLUv8VoLcxtQkn51XsUkCjRKJGZbJKTGaBz6aMaMEiDYpin4Zje7TffNS1hMVQBZGm49p",
  "key1": "4mn948XJS2MmjmsEqjDdKAfSJWQwsAvGWtdELeZC2MRh6dEEJrpnr884HPgJWuwj7yaVf4iVxKHcWgUM5auwdg5Q",
  "key2": "2KrrHMFEWN2unVuB4NxKVH2ZSzWt3VHF75sNDUtbTUMghaGPU9q14ZiSe9qZDWWpLaGBtucbTtwoWyugZXLCMUN3",
  "key3": "5XcieTZ4TUKFHotaCNgWTP1o8SKc76yN4cmrZvrak7E1Uav69e4U1BbwRxLYBVBAAm26AVaYLCim2DJ5cjqZeiyY",
  "key4": "3zrbQPtLU7EF1gBY3wYtvvmbrQAmLXgTSWymzEWDn4ZpkxJMttnxJ2DxLYfCkeKMBcyKFbKRhq9umritUMK6eD9Q",
  "key5": "Gi9vGWVEr5RJWYniYSQTmoUwd37JHKZsdTGzXQQFXFv8KYYR3PVktUtDn7m3oTQX2sFMKZbTPfF4KfeBvqSmDhR",
  "key6": "4Hnpdogkzj6MQtF8rJ7MMtxDPadVUCjNF9rQ7qr36qaeZ8uwAHYNB9rySdtsfiVmg74cpxmsJGBjGGEcfy8kkjE7",
  "key7": "3dR9SCV4GV8jo367uzBwJeRxEFtpvxEvtay5ufcMVPGjpe8uTbnSfBKxUDf1BNX4dMHSTQ2kPBx3QfyhVFqJarNu",
  "key8": "56GnCGqZnSfrn3sVrZh3mspM78hC6t1y3JF3G3uSHHnQqJmENN4yA7Lfg4ikK9xDKQdXD6zFEBa1ozmnon5pwC82",
  "key9": "5gnJLatgJ2EGrWcmqyP9T8xxNBJQiLzWiKhnZx4CYp2MTSAtZ4njnjWNQCo7mxxqv714EbFatTrWPsmNviWpyWTb",
  "key10": "5BZhfm6GXNrU5rTZ3ptN1wARTGpsvWoG9FHbwmqbWCvPx4bdUxa7CVoEQSENSMbNVX5ZTy9P6FpZdsaDAbMSsu8q",
  "key11": "3fpvaE7EMdiDxxWxBThsGzfNsiq1cX7ybidi2Q6HM4cakxeJfmQCRMQWGyAxYqypsLZm2zUTMjhKWpRjTeRKeSE8",
  "key12": "4FP8GU7q4XraRda2WPmDSe3hdaxgvKSWAJvY7vQAE5S1tJe4UwPU2MhzdxNDbFUUMd1sfZtZMopdu97mkB2zcuAo",
  "key13": "67qyvS2DPjtHbRfoE8gKAT4eGPx1qXd4V5ZMwXnR7obLYrxydHqP2FcfmniK4RVfmQ5cvASDa8tf8xgpZBwjpMQz",
  "key14": "3d58FhMzGNhzmZSppnboge6K1fcKBTEs4TZKDCQoaRmHAUzVM9q9vwjhLwZEDEFJimJ4Cz1oKdHX53aucXGCRT1s",
  "key15": "3gFXq6R3yBnYtGt3jf9VnWrf5dmmwTsWa5vLFhajKat37PwNKTPwdhDKRrFfoFqxqpHQyNJssprXUoxF1tjqapgP",
  "key16": "3pqmYeKMBYLigW2wPUdqjPDBo1AdRfJBpWQSmMJz2Te59KMzv8GMsAfrwrPUGhPBiUrDAfBa5nyKB4m5uHdCGXfc",
  "key17": "3rDAD6QzGLvnzj9jEq4D4XgcbC8VxsXbCuJ8Lm2gKdUyQncqR2eqHJZ5qiBwdfQNV3VHJuKjvshBYCw9WZ2ntAxF",
  "key18": "5DzgBtLcedr7ahzSni5X1Uyzy7UjiChEH9eHbe5GPjf2CTA81RehEongwGUVM3kGispKM1xyJysihdsCtuCX8yDv",
  "key19": "3BmwBhrV5s4nLWa7H2Qk2K9ddKfYFppPVPLb3kwbT45JS1ZYn3fK8ocX59xLEXni5okUmByBxAa4brzi5FX8wXjG",
  "key20": "4BmxRuUB9yhgAKU9wbc2JKcCVokFXvWPxHTyXvaCVSnMuXFH9nML3zXycFoYjHGb8buq8DYyPTFyu3MiUqrgepLv",
  "key21": "5AWgiHC1TGDHE2oNFh2GqeirY3cjqmEMPAsV6mqa1SadGSa2bA7nqtDrceojNwtzisp3rQmhGKZKwp1GcTUNyTno",
  "key22": "292GcZJE2oEVTi1YPikeW3ppm5SGabXZSRATqpAu6Gp1a1Pj5K8T4oaKhQDKZaEuut2T33GEodxN5RLo6TtbGYn1",
  "key23": "3353CXpRQRie52SJYdM3n9kG9LF2EEXWXyKQpvTPHyZkQoSHeYRi1BBzwgAdToMp2MG2Yqdr4gZ9cYFizZGSBNRp",
  "key24": "3jcdSBeWn3D6Q5Eavo28LnqioLXiaAmbV7XrkrbEbHgoJdCyCaFhQfkUaUCmme2TvArC53XqQ7mqWHwFqZ4uFdJS",
  "key25": "57AbcVTa5LEbC7uyXBGBXtJgroYDCskHLTUSCJq5qQZi8MDdXLUy4gewMA7g6TLLdPaGqPEJveEB3EgLwfGGVXGQ",
  "key26": "mar12JV84FaTtk16pXRzqRi5wEQifgqCAt3sKnLpMx6KUCKBMctaoN7vb2PfWC8eqrXgktWttFjMn3jxCBvqRep",
  "key27": "4NCh71Mn6N11WyL6X418DGtVXWvJv6TmwvgxeoucmwHHWG3Hm1ZqZtt9LAe1x2SxgbvvudFWkssvcDELt2opByHj",
  "key28": "2AQhYpPzPGxXAJb3x7w7G84hPzFF91nY3nMjW1tSxxbzU4qMCaBK8zAUVbX6cgk5goRnuh1CVy2mBtgRyjHfkosX",
  "key29": "32AQvJY4my66EA2xYnPatbbsWsyQDznNL96gkNJmx2DKi7iMPinobzLaxn6NmNzk6qAn4JFHjQVHW7rtgzsoYWeG",
  "key30": "2pGSXB8J5UfdgfT85hhqnuVLTHqVS8LJSP6kEKYNtFGA691w2ego6WaNKw8qzuBD2MjhQ7aXT83VBGwqLFddoHx1",
  "key31": "4rSm8zqTSiGxA5LEbPawViCDbmVDuqyFajvgTZ6BJHxtdxNQJucRtvCrkw2DKLEncHtZM3R9ko7PgdpT68pixyYw",
  "key32": "4fPkf241qrREyxwHoMGjdn2CsRv1NdATy7CLd3V6mueei9wSdQkZyR9GZQmCDDnBZSHGTaYmkiTsDHxEbudWc3Yn",
  "key33": "4P3tKCQVeDXdoz5NVaB1ku63GhgRawEBm38tcWF4sTDKJiB7cufxdiAbt4ku6NczGvDpsXqTkTfTE4LV8pdNmCLJ",
  "key34": "3RN9QUS5RqrqMWMSNTeozDH4yUJcG1U3n8Ne5XbXVwjnDEAVwM6BEyG7Qv3WsSFi5Yp3XrC6yjQDapVicyDPhzQJ"
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
