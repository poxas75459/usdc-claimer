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
    "33caKCdfrN4ZL4XhBjDpYtmtB2Pk46E3ZN44XADiNZJ9xQfZaupHKdKDe4nk9fTMweE41q7xJUfZadz97qZHeJDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJ5jyN2ncDDhA8A5D4ZmRsqSDVgdK6V3LmRXLCekPT1unB4eyaPjmLRji3VQe5CdQepyCoJdPGGqZkPA4jLN7xy",
  "key1": "5irn6uXdVB5GrZEXcrJdCuLwM7RDa2UcRdzFBzvtE8oR5cMjDEqWQEaX9nzvqMinZ788vwxDSw4Qf3jLeiVqnMRp",
  "key2": "szinwqJFNPSg3p95CaHVXaMFszNT22XUnqnukGvNDHKKDuxj3k9Fvi6VHEnotdSnWfc15CLyLNyqz3LYwPW4CKf",
  "key3": "4XCdyGt29Ddd7Qs1gBQrKEYdCeqkakPSJTnT1DjPSHkFg8DPkpS2rfnhHBE6ARaNS83aitzZ2NiGJ95acjUeda14",
  "key4": "2bJkJf2pUF6oFEHq7QmQcmD4nr7iUxxhWmW63TNHBBXQwLymwQXQHEoKCD3vNgLQ6VkVNLx28Lk6B5imjeAcWpgC",
  "key5": "4JpHpveDS4Sy3WW2hzT6qRLgDeCk3PnkbUYhdSdYwVTARt8WrTdab63rFhYJk8vT2T8KivFs3fkL632M7uB17RTi",
  "key6": "qPXsiqPPbHczfmToYVzDixkXx24oiG7Gb5H5ihQvt3Q9qB4v8StUGVkuNYhi8KhP7khw7eoAyMqKdM5iAkKSfeN",
  "key7": "5GczcAFgUQqXKNQGxF5hnc7rX8u7zaGW1rVHBWFxsh5PpyJGxVRLqXJp2KkTxFhTe3CYqgKEhASVj4MXsEDz2tMB",
  "key8": "5855SgBvVMnRg4EAeNJ9kEUR9jnmx53WDhyDJCXVwkKv9n5PFRAjxhprxDydvku4rc6Et1qvCznBvkcyXV8T1jvG",
  "key9": "5JEeHLFEXKUnAsMPSguHkHaJU13S9pEPvyXFeV3VYyo9jALC6L6Zr9NVGwo2xQa4UNG7zEuy1E3eMbGxxMqDKVMq",
  "key10": "2vpbJkLY1KXFepFcBUX7Ap2CT6ib7mrR5PiMdnkNC8v65EhLH9MWtwYvV7eTRT5EwFkf8sb8u7ee1vYE73CAL2fM",
  "key11": "5X2KXdNZ2NVvXjbimeGph9gR6bfyYBHFbarFseBeZX1R2wAnHxEGZUfURXNvmwqTtkATtNqZNSq8A8LmPzzQBvia",
  "key12": "5i18bZiZQ5LrVU5dThcWVAJiweZTwhQwM2gkGpktV4LwgmwUZKXJx4Eju5MTfYk7BimypLAfhsG5iw5MDHKG9hGH",
  "key13": "2hA9iyyX3hUcUdDGUByZjdGa5ejKTUhEi2CTs35hcsiXuEtuRP8h1yyRQ9KNmszet1Mubs4Uwzzj5RLARsYdTGRC",
  "key14": "5DDbQHLBQNkxC4Pm7GSLgVo9nfjPHP5djLUz2Cfeq3VhxkLsx8vYmHdvZYtsGe8LfYhAfwipGv9kQi4EKwRSiV55",
  "key15": "3nmUiXsweN6F4PjRj1ofqiT3uXspbkYM5PVfnGsr2P3g2kt6zKHRyuJw8hvgh5kfR5nvqA271P2r1kv4U6V8VzWn",
  "key16": "49fQETH7ovhqB44hXX4KfuJhgUfk9WZ6PQzHjXgtSgp5QA5Q1Xnmcngk4hThpAEcmqQDWSUFMuCe2s8gMNGWjG7h",
  "key17": "2M2JisQHWMCRm9Zhvt2UkKeYBVWfAT2SeQZBo8CA8QKh5mdg9CSxZ3Fhb4xnNmhwcycLFSmXdVeLAZKAJJnQcin7",
  "key18": "2KQ8uKhGDWM4eUcp4fPiuod2uMfZEWpZssyQzCKkxsJ1VdSGD2pYeQhiwS2mCpqLNGhbFyNniY1vUMpi1cJDFNiV",
  "key19": "ojysvJNapockB4enz1yDybvejstL6wNjkBnnrvP8rePAjhzrJqdC1h1dycwEdiuVFDZ1CoF4puRVsxn12CRzkns",
  "key20": "2gXbDsnGvJ9mes6FQMMQNnMiLqeV83b4EisVeaaEjcrLNULMhLfJX1LeDajGJe6L41JAkC1SQyUamxykfKQUZtZW",
  "key21": "2roo9fi7zkvtPTbTwxHFK8fF9r7MwwPurhdQywgEpYUUmfwXPii2Bgnof28ZrAcnsosVW4K6duTicU1wziu8mETW",
  "key22": "3X3ifH9VswctGCDUxRWJAezecPGDmjCFSchBJwjtfs7YNPC4fmMghCNFUBKhju1qhSvFv4mkC2ZjEBVuveTZ8YK2",
  "key23": "37Vdg6Phj2pXBsAoKRkAsmLS4xGyvZmfpMXEPc3uc5yspRZP84skveMvYkUPpd7Rpos62hhVDmFWKuDmZfHFonru",
  "key24": "2HVWq7EXyiUWQTnKGFyj3V491K5hfz2KQqfTRxAnPZgLgAKaufzKdzNU3jEBrjtSCkTKx4mhaE7g9MckHSnGehHS",
  "key25": "3kxtWepo41EAwkCVD7Ev3yN8RJj2mZvzZo6krBujsDAEP6WWc6KdyTQN1LrWXVMrCP6dckdcriJ5E4MKmtrxs9h7",
  "key26": "3rgaGagAJDNYuzviCrwxFoa7XyCCbmPDeqB33KYQETUsGtJnm9TnoGEPzqpaCgyc45sjfmEYvpCLf2nyrr1HFtMn",
  "key27": "2HYJHgjNYp2H4qe2MK9fphQkM78Bz9GYc3Gg6oqZ9GGukmYb2GevkBTTsmFxb5zejahuA3SeP4psCTT5EvwFZdfR",
  "key28": "5hg2jo1KSTmz74ujHWMkDZU4KqcAB4TKaAVYfy9U9nwnhzvbhmGrsPAzKDqisrsbsSdvMnbcLPtc9cd8Ezki7ci9",
  "key29": "2DqGuNpvTcztDLmpLFWjLQ469AoggdCSaRkG3WDEGWUzKXRf3bAvK2qzzyTMRNV9oXeEpaTP36PEuJFSnvRTtEqw",
  "key30": "yuYREvFpZpfMdJSDKNVwyfXYQwEZxV5AJ9eKRXLiNjSBu8SAC36UDfsdLawSErwro4tjQ8xfft8UpPzt4UBmFvU",
  "key31": "5d9vufFvvtwGpXATaZjCtBCtV9jiLxXDtdt35yopDmHeo5ixjN7xtSczTfuzcgt7XEp7NGSYr2px7HpZ2zRSNSyR",
  "key32": "2JwE51HgcHnBjV5vT8koMcdmooQ44hn3kfJAehWWCXV4VYa4ARMNBgH8CK62WrhLtqJ3LBD56UiWkZRjxabRSwWG",
  "key33": "2HCR1V4Zan6t78Fkm2Ysr6128M1WjRsjE5BiRmJFiWAqo8Gx4E9vyegtHR23EPg38cRwipVCKnaKXc31K11278a2",
  "key34": "2y4ZW9vBj21berGEvQwXA4isnhFgLC76cdbVmDziYfoPSig1aESCLWUJjT4KbsTKZo6SoNQeSUS4ZNmvGc8kAhpT",
  "key35": "34mmyf9wxhpHRCWtCjZx5SUeKBRfxdWifpMSJSkWxzPJ1XRucj3SzaJe676eAuqnyxV63WpxHd9TcQ86KRSCNPcP",
  "key36": "5yPo8j1Puv727ixzsoqtob1U5nU1SY1NtWWiBNLBa5B7oPNyJ9gvpwMaw7tF4FLJQ1viRh9WmEbG6DBvQMKfmteu",
  "key37": "5faF2vgo4Zkr85azNcxDeSivtweR5nbjAiNJpjzsndtGD29Tr9LsbVk93WM7MJEvMnNkHrLwsBB3ALNBwt52tSCH",
  "key38": "hzM2fBmUKdCngHNRoAdkn2RzxhXQiaW2VBvYYY1SpcWCJSwMzyfns1tDoNxqyQbS37sEiFfKrMgUMLaGRQDVs2R",
  "key39": "2HKm2QD7FntxhPeHfbHsinVx2ZZBBw3w6rHvKYwUVYHPKYXw1Dd3ZTbjbLce3uv2W4AZHs5WUrJ1TKzFj9YZD3D4",
  "key40": "5bGtBAZiog5YGgNk6PNCFFX513xmjkZEr4Le7uXANLKDDTxwxBWBg7FFJmz7d9gDj12ivbU7nazLCdx77WyK6fyg",
  "key41": "7oqFbKruCc8MUovLU5kGyeGskLVGgYXs6SbTmovPSsLb4tbarGTCY6GK5A6dDBNJS2QjQch9cfr1jbiCgogcMiw",
  "key42": "4N7vDZVBT5TaB75DeGeJJt7SWLUAE8JYayWsaL7w1sCwGFtMW9AfYe7bUdFi7VcYNR9zB2pzzV2jm4qFBkegtAwM"
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
