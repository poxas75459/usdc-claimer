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
    "5fdhHLnr3mxgoa4691S73JizdnufF5RWd2Sait39LDiKtAE2AgVcK1dftXTaD99KcnjuErs7bpjTBFZCtRns5LsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqtFo6F9s2bJgzvJCALGbvZ5gP7KfcBSTWQvhxsEfiLztRuUXAaJzAaJewYrZk3iL65ZE9w3Uz4xPAm9SBvdhpi",
  "key1": "nEViDK3QWykTU5cNEFZRYFhwMwyMN7FxPEsmTZRxyvYaCBXZxHcyKWiYneBBHr9N1xtpFXbGRQ2WBYqsk47ZEcB",
  "key2": "3bHg39o8nuqDiCUxHNSagB5Dstt5ggPMjXMHNZ967Gp6d6zLPMsss49qbcVFBJQpLCSVRxesVbg1QBDSat5fQT3k",
  "key3": "SUuTTNxefgxhidyQzTsHSv9P6JDoTqteoQhY62ReC8FL4AaFcsGC6LFGKKaVQy9qVyDZ8p7GK94McWQJ8QX7fMQ",
  "key4": "Jg5whbimVyV599NeLkoL1x9vfjjfCa2ssee89FmbY82BCAWzdDnX96K3p2Jw4enuvtbEDR7vGRyBfCBpfnQwJyS",
  "key5": "mbT2xRz7GShvRBnEGfocRYHMxK7yjdw64j6Zsv1nmUbimLpEGCCf1ZJHx9bodD9sDoZAy5AtF3bgWUZ8mcW6LFi",
  "key6": "2Y92xyHio4RMnN2G4DL7ShBs7dq7pYmAzVPWhJPA9SLUKCWeLSaeqqXXsaNtPuKqAykHizCSMUe2RGpDMr27d7ou",
  "key7": "2fmk1Cjy7AqTbB9EHXirjQMh81pXZ4hkW35hcXGszadqZKiyvV6ReRhnJT4Du4KRWFFSrdco6FtkxB6RXwpt3q2y",
  "key8": "2M7NDVnnuvhXfQ2BeFzjgg5wtc9Eoq7ViBDmki6G2tNBV68iVCPswXyDWmpxAdV62DnQKwNdEbWonm6aa1JyeHkX",
  "key9": "5VCJUkk2rYQLji3QZ1yAMQMmAPZDsGDT7ZNsqdyyp5hix4SzY3NPrY7EcD5Tfcxutqnaw3TDN9dFAKt1zncfdRva",
  "key10": "4yK6jW5yWMc77PPPJDk8Gc8hmRosNMBCcFSoxPs1rFzkuiw1pr8NdiSr5AjKuFV9HJVttageowFVeshwxXnkuZLt",
  "key11": "5veubH6ySki6rJi5M66NN55zpqiU2T4ryJ8zRhemo6sB4S3bRSBL1oisjwvfzMe899FTDXbUuMEbqhhWnDqcxMTf",
  "key12": "45EjmcGTqqx7nakJpuJvszXxgJPi66fpjQ8Gcjh2N8UiP1n4DvjJ7cv7YLR5vTQ1Uo81qma9F3E1sqSXiQSDQ9Fu",
  "key13": "jmS75fQtkZBqbTnUQdYk3PyP3Q4JrYW9a9JTy5FVsPgDH5qCRMrULGsnZTvKQB7VmcpU6hX2uasgzAm4ej7Ufwh",
  "key14": "4Mx37VMHtvhywbHirTcmicSYoj4HCUi9wNefFZMDzzqf5UXxDL9Y5BExWazCjFzAzw6Tcvga1iYqkzH5PW2wkCBh",
  "key15": "9MZY4WhndTAfCX3dKB9nD2Tdb1o2EEy55DQNVs5x15sBA7mRLE15eeVLBm9TpN9EM4BEdvy9LtiWiZjdjdYR91H",
  "key16": "5cwzNHix8ZPgK4i3Yo8F6TF7VU3LNrPB34jnixb3PnUFwSzC8SGaofFrM3QkE46b2MFiD9iFn6iLsFnxWis7A6GM",
  "key17": "z7vFBZ2nL6uu6MXjt1ep33wZ4MDn7qCwJxktdqrDuZX9HSEhReUgNWWKTX11r4gzRKRzJtTcxePkqSd9gSocyKX",
  "key18": "4huH92dBVqmry7WHtRzdF4GYDKNP59RFkdMeBhzPFjyqmLWTpAg26TmtJyfL3RAucvndsJjzGMGqDNk1vLedGiYD",
  "key19": "LsmpKJqhewBdAKSmzWNmJ2ac7DwTRCxTP1EZyoswasFtNgrG191dagkDvGqziqh5ziPUyrwVVRnmzEpmCTojXFH",
  "key20": "25QB3T9LJ6Tb6V84Wb3nUTLDceNCmRhfsV5XZomhShP1NG6eRko9fU5qsD83naxDzhGMp6BuEvyqqy5zgjnjfxKp",
  "key21": "2ExvXofH1Spgnu7tNDuRqpMP3gmRWYAh2b49N95ZE4AXoYft4n7neQ9a4TVj6cQdkyVc9wQioDLPVGHExtp9MUGg",
  "key22": "4t7mC9HErgE8peKSBW5RrcTbgkFJQ35AQzGNP8Wdad3AAaWZyKWjKxyupZPzZa5PNao6Hhnp5peVZri8mxTKMeDt",
  "key23": "5qEjd2DKKLHhrAA3Qk1s341ZuFCQjDU2G3rhi7mdzgoqoyupxd7czxzww3ADRzq3FL49XX9BcPSiKgAEayBfBngy",
  "key24": "4nL6v9rc5d3YRVSRYrNM8dXAecYZ845ion7qzaL7Sqx8gfdNEh1PJrnyboCgQWEP7PGSZTCRxYKhKmisBUSb4md",
  "key25": "2Wahc35Cz1Dtm8VqzrSeke8VXubDrkjuAM8RHccMUt4aQrApN5mnuwPr2XMhQKAvd58a72S7uquCDQwZNTR6dTB",
  "key26": "1aP9ENHmRTLp2aFmRzYaM14JM3F1RtmzLSWgfwXFC9fHbCSuzjCXmPXRPXmUmFaeXrch68j75ztsh9eBRMxszWo",
  "key27": "45qrFapcrHfXfMwpBUnkPBjstNX3hA7ZhnsZ9BL593sLFzm3nQmxSeuhsyYKVyWeP1XYe1Ss3gEd9KmVxjeyyNtV",
  "key28": "5BHTVh4htyRYVPN3kzVSeMNHtQC72GRhuVXbRhdCiNx462Zx4afHkT84M3mdbYSi2BaHLXxNvMZKhUoSZK9RXnWA",
  "key29": "ZciKwcVpD6nQp4WsmfPgAU1BMeQq1uxxhXSY93c2SioAVWhESW2REKdXBsg9auw18ZZCuWcgRacyHC8H1Yakhfw",
  "key30": "4sqAsC91RL95RGc8LS5hXJc29zUmZZuSQkZG66aauB8KKvkfCZavmXp6xZMX8DYy6E2nWNbgB1ETcVmsm8FjX5fV",
  "key31": "Lo2kFYj8VPaHaN6C1tTLZA5qvYa663daakqmnyzymCVyuaYRqvV4DumU2PVrQcpfzAJvcbQqWm1MhT7S7rs4mth",
  "key32": "DpQNsFGkRKPw5dkqAqm2z6dUymePHHujCV37PJx2vnQLrEWTVhiCdusZ3ddrso5gqRRzvtwrHRqnMAhGJv3wZDp",
  "key33": "2oUWbFJZ7JjmDo1UazHbDJXeJzJAHA6uVQqRJKQPqYpmtDV5Y2ynoxBn8Ucuormo2RKY3mpRc5sk79orHtAnqxRK",
  "key34": "APVNnYrZv3sbPUQX19oahtjN42kLMetR91x667gpTStVuceyBxyi7BPCbmGfvcL2iWTZ2JAht43GF4qUGg43bZc",
  "key35": "2zoVVgyqf6fTU8yYCpn65B2ToCizVBajrBftK3t7Zwzii86JjWRmrQSTidbEN2aPX9YxboQa756LbFkt3ttaEywE",
  "key36": "5PxCAmfauYzKPys9CiahLZV2rHwsECaPCfVFFEAkgPXaK8W77V9TDUFnTbGcq9D1y2nqdc4JZuRuu1fTK21t8mvs",
  "key37": "uSWZmXH8VrjXpsKjfy4aS1XhHYJZxtFnUqkTFWRTnn3MHxpDheXDYrF1f187XGiooQDZYeLYhrJFy5BQU3fPWZz",
  "key38": "5o7C2PW2FyPwNg3YfzhwqA73pbrtjg67kSBYUffmUdqif8aaBWTSUcduX8XQkjV829kXDdo4p2fxjtK7U5r6iwjX",
  "key39": "YggydTkLF7jP5kRG4ByAqKMT56YbEQhqshoLCwmzasPiRGxRnjZbxerLgWLPCyK5677BYrEJU14ibcfJBD5PUfr",
  "key40": "3RdCNMGpNcvG5Ktr8VNDEVFJDbUM25EcwTrdpbaSkpmoyHRpWX9ZkFrfgppuNsf9qUQxS5eNukdA46rjEZymvuGb",
  "key41": "2ugzZRF1kUnyUBxFXTRZXWSG7AHQnimGH4GJoHK2rANFf4oXRKKMEi1x5B6A6g9RxU87utr44ebrWUNiPaspFhGi",
  "key42": "4bUAj6bL4fiLAXMRy7LkS9XmGaNQdDTXDYbDdHpmPrHGwqZ1RUZUUwVNGKeaUrCW1wGgmiCb4eHkEnanQA41VPAw",
  "key43": "3LVvTnr18ctUWRzEFJUkhFnnmSYw84dDwt2ZUZhEtn4NwSaK83S4UsrFx9BN19QSUf3Sks5E3xckhrL7nHcKFBGH",
  "key44": "2dbQsHs1YPghB29nfxDPAyGSWKfxW9nhzDcpxXGKmLn9nKHZXYdqafi5KURRDGLJvocgXPwm2cqrj8BFbTfV5V13",
  "key45": "3x9rffj5so4xUHF5ELRWvoBgcALGBJYLuSs28wYh2Sd9oB72axYBPX1kLiU7ptDKwQ85EhGthGXaJdjwAW8YvHwV",
  "key46": "3Y1i2WS9cdDt8EqNbxHPJNuFfXjoBN6yyuk6AnK9kupX3ZQsfbAPJj2BA6ybVQkWhhfMSvkPKUYZwbR8v8RpaKiL",
  "key47": "7XCgEU2u4HqfwizZ23G228atKFYZ5YtoLKkDMZQZXfZaWyiEGgEdoPNAkeaGMtV8Bz7L641Nd6S4SLXm3aHwT9M",
  "key48": "dmHatNjHjPQysFe5kn5Et7zRr4RZopAdCrT9EsHDshsfLdjkJoyHhZzPyDdVRgCxPDx4yuf3wz1R7hJrFpVg9vc",
  "key49": "5jAVdoHh5wbt7Rf7dF61bLL2uRioenncUQHF7tbRG7JiHP6osEf7ZxVRDxmFFixyuZaWE3c6f1idAGnyoKVUtPHn"
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
