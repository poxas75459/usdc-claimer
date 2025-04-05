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
    "41Wh6HL2WjUWzaFSZ78vpgg3yE5uYvLDtt9zydfizJvyTu5DxasRuKhz8USjiS6B5aoWNW1cKj5q77mw7h858nXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G3MQ842v8jyuQTy9Fp9And1d5oTFCMPh7YDTkPFYce4kgJ5YRva3AL7cmTXWKZKfkLMB3iEgBWVWxt5xv16iip5",
  "key1": "8yLahnHFpmTcmrKrttLq7GuaX9a1KkjWh1Av2yApA5WtJv2yJbS3bcT4boVLhFu6reRh7oBxzYZNdYfw7oQc3tK",
  "key2": "35KPZT85KZ2wZqDMvmx55TnUhaFEty4Mzq2TFdeArzXKFm5Y479yLDMppFEoUgf4ur2uADpyUdWXeAtbgrnbauZx",
  "key3": "4HFXbMJGqv5tyDE4xQUpbGFDbe1ezmGtLnyJe6DiCrozr6xrHyTdeFsBDRiZWsK6k3QdcedkDL4oTs4UhJKuP3i3",
  "key4": "5UNgXqVRhFytHqRXWW8jF3DWLz5LZF4zB72KKRdJTTWhWrJGtnxXgBg8RaY34WsBiSFR16i53ZxDCDQueGrJttMf",
  "key5": "579Uv2MdNEcbJqKc4JqQMiyiKCjUK5znA4j8f3TgTo1GHS5KU2G58eZ8S6xXWkpdWQgCaVY8atsrHQmLcmKHhGP1",
  "key6": "TVcLrhF64knBbHdm5gUK34qed3EdhwD3hZsC7CvYDapNz78zEkJwC5CNFv51Q5THy9ZU7aQkKtLHagVdqAdkjUh",
  "key7": "3TL9Qq6LN72N8KNUNVopBtdTgTFHyYZouDM1dqNesrz5VZwDzViEWyAJwK3pRpUHbfNdaHiTnzUd3CC8K1TjFjgN",
  "key8": "47hz3LDUvJHsfiQoomVCU5RzBvsio7eJ38UNDySteLimy6LMMuKVH1XAPosoAqndAxLvdvKJquUYBcB68jE9uydJ",
  "key9": "4UvQ6WT3kcd51ZsVhFHUrTsQL5DgiqnEf1Hhr841N5FZKXXG6UKH3BeSAPGYPuWPE7kGfgmT7SBrDWBv3TzePkhs",
  "key10": "3qWnNwVdXMUMMKZMKLZSGsDMkxiXQC2D6mT8eK2PSuHoK7MUe28FJwbduECBRRsD3tWVzTk5paB6zcH3j2mVmCyv",
  "key11": "612ctem5dLBGkw5AR7QxhgCd55zXLzVU5nepALDUdPYqGJmZ7nDM16EGAQ4LdBb5KCzCxyLdWrZA7F2AWPAn8aoQ",
  "key12": "5HCYRWaZn8jeN75K9BHYhWgaPjCo5rE4x1P9t6XTrqboyGRYXtnwbsHG4H4KHdW4apUBaEDakmGKJ9NVWenTCkSp",
  "key13": "62thxKefmFpqKQh9VR91o8TWytFwSdrQhLeWSXDmMx9uDJeWrHLGTn7zsPdqq8QZqvpzFcvKtGdFb8AB6MZDdNnE",
  "key14": "NaLC6AjAzGtD1hpcSDDimgNSrsGKPWy4qi9ZHd6i7THbR1iWX5zaETn7RUgq9gr5TYSRTLLvbNAWuzc79y9dW4f",
  "key15": "4QsyGtUe2L4bxBVjA3ru1nip23ZMpt7boH1DRFJtt32Pz6PXUbUmLECPNRxRpBtcQU2NvXJapgxMiN4UD8gPc9LN",
  "key16": "31aWXN61knDh4r8FhuJV91qE3hHUrkenk12vU9g8Qb6mWcd4B2e12m4KZ51agEQ6935KcMmTQM6soZE5hTL3ycPS",
  "key17": "3GBJp1RsnFKs5E8p53bQg5PR3KMYs5Vy24pWLf8zXeeu9JmvtgNjFP5Z1GFwJQfQpTtoWABLsCxx4fS4cmtaWTS3",
  "key18": "4kjhkCrWDqFiJbp8vmBLrCJTf4i69DKEKUaE1M3jKvFNjHHrfejmp1hyTPUxgH9uc5zgPZLnYMLQPVLUk4yuKAJy",
  "key19": "4cEKbeV4RneEau133C2vSBLa4q3R6d7uq7f5scY5ngsYQtAAjKuazWJiyHPK1MfjiCUzWNnJR1qGC2Q3Lz7fS7Pn",
  "key20": "5nTFfZXCUcdfoMUjJFqtayPnJ3GBdgEeYaZEiCgShCodmPsMqHZkn8SX257ogomcPoCk6MrSfkMZgTHAD2EmJTKi",
  "key21": "44KBJprGvgeoZ3vV9iN3m3APkTuikbPqFoAE3KthVCDy1y4Rh9RWuxnzVELwB86CoSs6F9fcSpuH6Vzng7imSnR9",
  "key22": "3zx5QdLEd9hMJLfRMc6Csfzy1gq4j69uM9DvmmT51wPGKFcJvVc6cUkChmytsVwfAYofC3LZChZ1ECwDLi2Au6eA",
  "key23": "3TdtjRmXUpUZjdjHPGhZEanotJkx4urph9Di9W8TNiEmjKCakeoHoUuBHcVgkY9V8FGE4YitjradBVmkbfRZL3xC",
  "key24": "4BTYD3BxDquXQtxCzJn9js9qrjB1jQXphZ93JmKSFgi2irb7M2NSRXyBVvdUjrmxZ7nMDRjiJRpDmpMkHaBspDyZ",
  "key25": "5jP4XWCYHFri8EuAi3d3UuYBvjNr4yEHUaATu58pMBbceshZS7xGDQ38j27qq2KHmptQCHnxHbQXWg9YBuXRcQ3C",
  "key26": "2YQ14DzwFUR8uGCCdzLrdVSGCJoLkN6ySKpchsivSdQuTqKtLLsktQgUJv6efxu4XjTLKTs5eaEv4MYPyX7ErVav",
  "key27": "55KTkiwwjJmRuGv9ZYqoMSybPqDeJ2AZbT7WMeZk23DiwBUXs2ZAa4Kvk8dDBRKx3Ui6FP5KzWbwLrsua3R3FCji",
  "key28": "2pjrDDd7y2bj4cVm5uBB73L7hoKBq3Nt8Q37znCr9rrsa26KbAFgNoGAXcmUjzqLuBWhxfsQZ2vS3U1rR5tUsvA2",
  "key29": "WoorWhxJ9uwG53BHr8ctWJTv3uJwwxxtQ5zN4SKkhtxtzbeUGCkhyav4AFNyGKgpUrfaydxhm4ZBCQE2tZ4qALB",
  "key30": "gHCCLURdXn3N6FQQuvJ2iCzGVckpENMxCM78NjaQccNEKQK5ysuah6HbtWsqTdNtGXdDMAc3ssa2TPHJDGe5J9V",
  "key31": "3Zq1TFeVBPAFLjXjCYtdJTCmFiQgHoJE4GLu25XYnE5ovTMg8hK5ExhjZWKmLHnnuqDZXrUdFgGucMici1Qi6EJn",
  "key32": "4EWzXkpxSxvEzrcHMnMxNt9Mz8cZyVtpwvw7oKrn9XfVD82qekRHAu52FUgYhUmwu1gxWo4JbQgsRGLrKjGCXqqW",
  "key33": "njxmukHsq3BhCqmQQ7wHKibKN5PHSmTEqqEJ8N76gC2V6pKRW8dP17WdFHntExS8cSQwqL7zkMpGyb5j8tDarre",
  "key34": "shLRssHE8yP8eMfzq4eLMg4jAgU7SxJ9fRrzCSbnhszQFn6AW2xMecKyA1eW1VrM2ooe8kQzWD7NyoXb9Qh99pn",
  "key35": "4LZALwMktK3FtHR5uumMDbuuA8sUBaRc7cZgzqFDB5vYbdUGVqkNrUoeEy6nwhkhFSGiK2VKm7kw9mNCUTcL8FeH",
  "key36": "2GxJ7FSwMcgewbdcAuxJTAWk88By165YYisF4yVxTEnAWwRNJQuxury8xTBd83Hrhv9wm3EwkfbxMMSQMr7Eauod",
  "key37": "57SCWVm6Fjksh6m3WPEsn22dk8iVNKaxx5dCV1iNXn3Mhdr4n7zu7e5aJDN5FLp85pG422GkdYetw3uVVNq8w82D",
  "key38": "4gyiH75qsfB5dpZ26zvr1cJ7H6pDEczZQAZJEqmV9D1Jtha8KsiupwsokwBFUtDaxQQ966Q3vXEb2Spd1NB5GzK2",
  "key39": "33aY72ECpBKc3XEpwz4UyVqjHwxzLYSM3Tpmzdypg4AVbb5BFHs4Bp1SofkkYp4wrN45Vh94vgPPj2w4pZugorxg",
  "key40": "2w1H1w6mvpRu1AYWjwrFJyFRKLFVS1mXyXL1dSRoEaUwztF457iKLAVxhCJMeK8UBfXHhPJ5H5A5RkUdjYrEc4D4"
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
