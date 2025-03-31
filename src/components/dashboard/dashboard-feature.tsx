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
    "zZnmyWzN3bT5vUQVarbkM4T7VTkkgE6YLTBEP88T8rthRYRDyKfmYiNsaYbodRzr19z1QAHDoF9kYopG8XDbbY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dfFaYd3Fcz2hQ6PDzS46QrfBG1ErZsXPVsEYpAxWi3TiS4rJbX7toxHV86K4XieY57Z9dix68Nnw6gEXTP7EY7",
  "key1": "26pzMgh6Frhepvz1fn29XghSjVPZfwVvdvvrfhN1zMjhEBwSZUG9n7D9hmykAEtazYZTAeNU9nVHsBPaW1QqL83x",
  "key2": "5ygJvMWqvEYzgdKfH2AoZ2DwPvbunXUWmhpdsx8vdJcryams3zvcPoXGDmyFTHdPv4y4uZXiPUhxnBmufdjXG42k",
  "key3": "4doaQgPtew43ccj8CPhvKYciD3JUsp1FwZQ7PjY6DnQERJYsp839FoaqFSzuKBSp1qEijvgVyP2VDorU5h7TeLuK",
  "key4": "55e7Urpt6jKJbEmrRUrv959uuHq39crh2cGV5bZKhf3wehgaN4JKwYWrWDy25PVLMVdWxk5nHLw3QW5dxgE36vXy",
  "key5": "5hoJgxH4ocCSmWnhfvaJ86ZreDTtDUGEzYJsfH6Kr6PNrDkeZvjkgyaDwARHNV55snkT8VZ7mVN7cJ9A3F8qZVZ4",
  "key6": "2NYGrnb9yBR9CcjB4YVTVb7EExq6SUZbXGLCPzvTFiaWtwwCSF1MYPtK1eEAisyd9K7CDDDwmqGWF14SL3aLUmLF",
  "key7": "3JQiSHs1D4AxR5VTCm8GEYFdaMNc5W7q8wb4LzTn7qyB3KrLWpaJWasad8JLGXrd6Lxxz9u5do6WTAcVCCVv86PJ",
  "key8": "4eU8g4FX6ucx9QwGsUZEmB6SxUVjP9BMnMo6VNohK4A4f1NtUVMTiAzWCCEy73CenSGmbKGAPt5UK6NGcGWRUqSb",
  "key9": "5TmLE2u3Rhyucg9YNRG46nVoddJne3XyaKBV9LeyKWFSxdh4DPDBij6HrHqAiFWhHD96KvJcSfwi76h8FiUs247g",
  "key10": "2Mi7xowR3C99ojXXBei6Dms5frwLpg8JM5d1c6pwBZcpPsEzHxsHbTaaudMhYJhuRAoYZFfjDcFjwFrE7PTsnvmH",
  "key11": "35qnpasGxNgsE1Evoin9qWW7pX4T44qYCiTKUegapkd3PVJMtwcQgzimwyPoDDsfbWgYq9WAFcfxmVsCwxcW7Dzv",
  "key12": "2cBcgibkBVMZGNZf5ZfcT1mFEP2nitjG4fZyW2qPKnSeG1n8KBYVGJ7ZiPVu9kvhpkYvq8ZTjjE4piu87crUDnVX",
  "key13": "2RyHfGMrWPXQChGwzjj6BFUjWqZahiXirCYD8uUCGGj4mS4XdxRMitK1yiRKFsCo1Dd6ACw5RFV6on8YkkwvLcUj",
  "key14": "4VXqDFrRuhQJEbnCHaVsLEAaQVMmS6sy5pYZAETtCkxm9WgUFrWDqhAYoRUfM3i9nJRJEY8GMX4e39jVff7F4Ugr",
  "key15": "2kMJuWmvMiR5c2a7VdaeiP4d4WM5E4CCZapCBfV2B8YQhw1rQrYWT8bYsyeYfpjk9wmhgNMCrsYqDUXsyxYhRYT4",
  "key16": "5ueCt1uDoyuMLVJRZeWsy1VtBioQ3EwtxqnZqQrstLJQqr9RNyDCHGXePfo2gHffMBpUCcCQ8b6R337LP8KCeuTf",
  "key17": "7TPSf2Speg53aeKBCqCYAQkgKQjBksm9kJquyVQNq69X8jb7bLTYjj3ddKVzxiMqTHbsJ2ht4ZxHWC4on5SDcg9",
  "key18": "3yRcpxQPpS7upWy5arzU1n8zWdMfjbaHwoBqcEnTnMsgfGGf4SLQT1dzMcmbSeMXwBCnq3boELGANqhFDVbHSUp6",
  "key19": "4e8M6astA2oGV8dSh31s7qH2HvNsVPd8ci6z1DcvS7vhpvsMUtyAfhnpngnzSdK67pyN8YUEKKfbkfwCU8uiqMPp",
  "key20": "2HBzWB37yqmuq68R3DwuYsyoruMxiBnSzbsZe9RWyw1KmAbcvfqpjLrkyE7sw6sGJDVAvjYGEfktUWJcZLHunioZ",
  "key21": "2Tx9aQxLC1q4W9mN1mhKkrUiFL5Abeg6bwQacGb6faFTs3WZ3kAgt2mdXWughfq4uCEbyrhvcciQTTpeNG4ubhav",
  "key22": "FNpdHR8maP38ijY2Tis69vXckkzUpSrQWusgNrh1KEUL5V9KTSJjnTihRo47uMmpD7K9T83SVVcjTZLuomS42vw",
  "key23": "32Qpcbr16xtm2jNYrFw68vwzVbp66UmbQp8v28hDLkgNuyzVbuHXo3UjZWuX28kBrcHEHagVAbq5BNq35ABYcHwW",
  "key24": "2pS17ZtJypKPgKfYdNHXmgsxiFRpABTiF6bytYbbf25kHr1vBXPybqr1UWMumy5paezbDarnrsY7RBEvJB25hBfc",
  "key25": "3vAWpv7472bo1gcvw1p6rAVy2bXxR513TsmYYHz1hw5kKznPB7zEKLjaibUogDWn1Y42hZuSPXAwKY4ndWVpZH67",
  "key26": "3EbtfezzsBa3HpL5SX8LFfUtq37zj7zwQxRj2LFi74GdgbgUEvprH8gPfYspRLaWD5NEqFCj84XfDhnXok6MTgbg",
  "key27": "3uryjJ2aTgwi1eT9r3mGpR6pU727z2pTzGtNNhkkkHBDue12SRn75EFjRhq9Bjeb6URPHGEF148S8WinDigPHSXq",
  "key28": "3M6eUK9aUM4iJtRRXjyjZgr9tnTUDw6BtRjkaEKssBKfzYteaisnxNvcJgQJcmE64TtuCSsyqXrutK5wY6sFrR8M",
  "key29": "9Jqxu8GUv5ifWvJVSp4fSxvjvSuhUfCHsEoDf6wj5Exz3nxKq9He3iArtSE2bYp9XZ9YtrLh4fxRvzqZFYiLHzB",
  "key30": "3HzcZJLNmF7ZuhgLCAxFh15JynGXpUmCa5aB416zE3GAMqkqBZraBA1G2cvTK95vn8jHSM9DpiDdaCtVyYMXy2iH",
  "key31": "2ZURjk2QuwxwaJionLSZT5NT1L4mezwHFLtnXuiP6LtPiEAeSryvCoq13eJJNigSDYV2Cs1quThRsKCVGvWdukg",
  "key32": "4Y1hGSRfL9n7dm2Xs3s5oArrTGPCNebrue3q3NLHzQpGMm4tWug27vGpTdqoKGuwV4rfobALz1y7syb2N58fJo56",
  "key33": "2JdewjJrEgQRC4s1AW8w1NknWZiFQ6LVff5WRZ3625gXdvEjtmWk32CEdh4rxtCugHFWMsDNZ83UVtvWDhpzaXuw",
  "key34": "GY3pVsLqroLc6EEGPAE7wHxxnvm5DY8vTYYGzPnJR9EX2vZA9PBEJYVS1zn6wAF3rRb8UHfo2Wow94BH7y7suW8",
  "key35": "3QddFVpkqhVNTnL22mMQWiuZ14oUicDpoN24SFGrsHxYhrbdfj5DC6roybP2hjvokWktbM3QGLMxuSGyoyHY1eL6",
  "key36": "594E5sfBKVzEevnFhZpNNeSLZZuYnQsaMHzBjwrMRqgrd2gJEA3SPQ36JizCH3oobHaovopkY18AxFpTRSZ38USg",
  "key37": "4uNveF1LH6N7jTe26uovr3ngoR27mZHPMzDuNDZ9ujfwvwuZZfk5hFcPHTJPWyTB2j2YX8R1ZHF5664D8GHJmpr6",
  "key38": "3mwxX7NiUBqay3fCXnnDuysKzzwbAKMoAi4SjLeggFnTTDf3AVH1V9sPjppi8FXG5wQ6aZFWjW6d6tA8QFag54Yo",
  "key39": "7YLv65ULdbS3KBQifWw3ZJD46vp8U51hsPdmePyyFDj14pNXxHmXs66hzwN1fuqWFMgPffDGEvTCj7AJRCh22ox",
  "key40": "3FtgSLmxzxRMhBD6trqSrsNcA66vfvjK4sDyqrGMCXAZdar2kNxk8gbuLJwRXyTe2bZTymqtkXcvPokYyZPg4Rvt",
  "key41": "CQFW9weAwimSXDGo27YtwffPykwErJSgyoJdDCngc7UBi78XhWvwGqDeM5xifUuVnNTCjwtHZ6kWbirEn5oqFEG",
  "key42": "3GeE5BNzFx1a6Mb3nFmPqD75auhqWHGHJTgKF8vzbvm3N8mk8SjZTBKehhPjvFHLLo2CwvbbHJsvPzCyZTJbQVLC",
  "key43": "3JLEtdbivTQFv4ckKQvQgS9D2rtfeRRXwCanj6RmjxCXcn91e7RBuAEkh8uSUJWy9aYiFMZVujrH4RTD39ziXgVb",
  "key44": "2uQ4ocdhZiSLATD4WBibJHBD51eSBmM9jPmG7tgTyhikFFr5FT69qqhMSJZ4ZuaUog1BejF5fszp4fR2nZe1g2FN",
  "key45": "3Po1Sz3ysZJKRgaRGBHKekRk4xuLf9GYB5eiHj3ktdWqDZoUR2kFw6inH7uhVdXyA6rQ8NPpPUGiGpU5Ax9BtwEu",
  "key46": "2VcPMXcPgRtPQy7j86Ck25VLD98GqzQXdGzLr1ahm9AtrzhrDS3Zc1YTmC82Jk2tYW7ZUyX5pjye3jC35DRpng4k",
  "key47": "5xHQ43F5nawPZK3RD9K8fWLASuiemPpxaWuJfRcgdU5V4k4xJLacKdD5L49V72vCtKixJAJfDxppa7poEN2Pbjjg",
  "key48": "3c9HnzAvsbGPsMp9G5nJxSzzEQYcsVJWHJGJJ8wSHnJfWG2uNXx8sX8cu6g7FecHRERMJhhyLQf3GqRyMKWmTujP"
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
