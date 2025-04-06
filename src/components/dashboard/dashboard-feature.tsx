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
    "5Td8KVcr66QcqbaCYJeDnXywWd4m5Ms4uRUbi2yDBu2mtDdTw5XfKub9Xa52QksirXzPp8FiXdsoQWAQfX2rBR3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jup2JbWrJVRaDN85aQKFQ5LENgWdRBpH7Tk36PwZyCVGZoYs8ymMeroHGKEY3GDogBiU8fHWKrnywTCXPtxVnNT",
  "key1": "3e6JegJNHLX77TKBxWCJV4xXkyh8N25Vzo2ZoEjFLvzg8n1Fjf7VE7D5Nb9kPGr56WX9EM8gxe5CtzZ3H5vm1LaD",
  "key2": "2UPZbcvi44smq2NVhQeJBegKtqQLPM9b1PTUNYZXtNfmo8bLN9u8nm2xgFR4aqsGroLyB11i1WrVQrEyUusfqtop",
  "key3": "5MXBAc79um3VyaeP3oLwp6MfTkEpJcm9NJT6itFsVXZynqVCmJ4MmStWRUobXeyDGVCQQamA5dKkqWhDJM3YGyLA",
  "key4": "4RFjbEVeLNKJpuQhLu2MHynS9VwsNnqkE5DWVLGztYahf5mcEaNxSaYTdPqFLzEg7p2poeXRqoq2xLmjrrh4nE1M",
  "key5": "3tYNDK9uEs2AmAMkcBAptBCgephULFdqAbdw9bVdbfEqcs9eKVoFNANMwaGLSu2Xjc7MxQX1QSnmf2FfhybWmRGU",
  "key6": "5sMbuWpFtBpvwE48GXuAFruwueFaPJXMtJDqJUvxxJF1UnsMdzEN7g2X9eULyQ5w6eCQ7dRpqQXk3khT2A34KNzh",
  "key7": "4PMmasx2oh5t4juqJ6e4KxgEDeLBKjygZddtj29SzWns63dtfhWeypjuEpBssWKgnez482B6EyCTCNHwm969GDLu",
  "key8": "2Bmb7XY9Bic7fhZuaXjiH5TXiUu94ZM1kXaLQvb7SLBirU1fxU4nXg1pTACBYF1vxUEHatrvkF8f7UumTP38bTwS",
  "key9": "3ceq98uznZcMU2aokFcDtprgVmFtT7KfrwNgnc4y4TCT9Ebx6SHwcBHo49nH3CDcEEqSLyMpS73RF3LCL7Q3RSNK",
  "key10": "2vP6UVeRrGwptbUpisx4ab8kNWCj6QY9xXYoC2MAhjEsAXUzp6oaMu4WwtDJ9sKgkTqGT5KeGyje3fBAcguGrusX",
  "key11": "4WEWPon9rQi9Bdpu8ZxpzzrDmbzwdVsTPHVeVte8GpaJAXGLrkkb7GsFCwdSY8RFmoh1inhXLksbvztZDhV5tCuF",
  "key12": "CQAZ14LNc6PqjuLn98Jz6nnEmUSnYxLnqqsVYZm82P6pF9cteaWiqTqXxeVzV3Pwes7HLUFaTGPb5rBSoKh6CWb",
  "key13": "3mvxuZFuY87aHATZTGAhjECMT7S26b4a71UU2xJF8oM68gduWgx1JQSoiYNZdXTCqoXNXKU773EeeF3p3VBjeS2V",
  "key14": "3bLfyknegYbmuCGXZ8AmmYQFGS2RFDVDXGstD1eSKQdsDbxMW2dujfY6yjDHtd3SiRbcHdLwpKrsaHdM9erGCGyh",
  "key15": "2DiizcU6vuoWs6k3DhrhEMFGPw362SWZMszZYdi9pLVXY1BrWDuB9PUd5BLDXbsiFRdVCXqL8vMR6DUpcZCm5oun",
  "key16": "5wvhf72V49hH68jAGQmUvWpwG7njrqvSVfymD57mYmQvV7HcJcXDmvgZEniKwwnDLFWc6ZRMg8mtdiRFXAUin2tc",
  "key17": "byHR24PqAV2JLD7nKgUmqBsMbx1tfZmLD5zm7ZwbHVH17cf2uK6SXfZt7boo5bSguXVLZh4n1nmjDJobytRRR3T",
  "key18": "4SZfWdaEbEFCsCDzDdv2GooJfujU7tkJT58nu4wRgdnhEGiMQBKGcTLQiCZqCVzhwvhW46NPGt5A8BjBbeY5WPrs",
  "key19": "4Fg3TYmyjF9enSorKNHY6Su6m3NX1kZegurRAFpfhhuyrasFXfYT92JRMzivkmP76rztThyyLDvgecsv25z5r2oG",
  "key20": "SFTBj49vRSLw2d4Ww9GbhWV8juM9MdXt6jwTtrGY8gKkmYeWh8o2DpydCqbv9b4ajRgNZCojmvVVQSmaZUkzEs5",
  "key21": "VL6StEV2S8yLamWZHhE5u2XfzYTVLvkTVhEz3uXYnWSbsm4K6q4rYvtDsZQcaF69M7SBUZVtyismQ1ZLey3NZRM",
  "key22": "QXAdz8R2GTg4nigDXHdSKBtdkMT3iZmocz4YZQj2QHZYviLiFNpX35pFVyNaRfyYCbsMjS221XCxVH4WHgdTcRk",
  "key23": "2En9bP1B7KKMyy9qTsJVf5W5soySTSiF1hY47tHofCDndJduHAjNtt4pr6sPUwfkWN4WpVduVAAmDebTBjtyxgxv",
  "key24": "2AcDLecbMHMvcJNesT7UghKezbjpKafRGsWTCUby8WtVSgA1KznSCXhoWb6m8ysFuJs8Ls1MhFet7cC1CkbjXz7c",
  "key25": "2yzGtEC9Bkvk9u42bq7btgqemsswragQkVqThRqjevfgbu4yW54Z85HQU1NCc5WyTm7D1tyWyGxXoLumSTBeTYQD",
  "key26": "3CnncRA9tByUL4VXHct3udwfNVXyXkrLSDDKHznDZM2wGeMx4Us4PdwtiPNpP1icY6ojU77hiAg2dgfT3e48WC56",
  "key27": "2Cp5L7ioUJq6fgCnVrJGpssqfTDtZebkzLy4JDTTigTH8RfvLGenztQgC3wyWmA3bVF7gDiojphGUZUTRfBhQrhw",
  "key28": "46WDLem9YZeJV3GCkPLvKKYAKFZ2rf29vGm4Mj4LYoKKrxaaapdbQ3NdRHH7G8o487myukMFBDVoFqccCeD7EGe8",
  "key29": "5wHz1FPYZUBxknxaaXDjJh5PyDqo6kiD5gp52RjkvviyrwYbAvhsjZm9LEFtzPoYMCWWyMrxfc1vhfDdiovLaQFj",
  "key30": "2akUBBkMadgtJ6XDspxSLPGsfr8MJWBq3yShh23C2mrRX9VMHMBz8VM5zDTb7XvQrF5Dez1VwPVkGvTM8S5BJcJR",
  "key31": "28yWSCXFJMGQp5tCiDAcQJQt4x11mUUfAigvb2cKHTvtcbE82zQNSKDFWkDiridRa1jkBWcz4Gn6D8Qb3tzdTwix",
  "key32": "3eXTNLitUr7cMmg6N3TfjTFGs2gbQ5uSN8SVFUTAoDzbtjvstJyrH9dqCzHba1ze2q1vnvM81GyX6pUYLP46iD6P",
  "key33": "PpNLKXjuLitpxzVtCZG77foRq8hnt1Sfnf2nUC3BobJGFzkhHyzMX2DyFxsoksUEJLNsiKybZoFuQaUHuHyNozp",
  "key34": "3A3WCkhZ5ziCF6WRErAyVZkr1xPksrQgM9Ki5ko5zsVHb3KWqdvk1NpozFiJo1wvukWe9tz19hej1Df3cMWctrnV",
  "key35": "2VFdiKZ959f46ms8Q7eHZfAWTCsTXh3NzL89reQ4ptaB8CWoTB6cWyAbu8uUyzFBx2hvfzJ3DHdqyfcWfQ34HPR7",
  "key36": "3C7nxSyhTBVBMyz1PwmKQYfxvm76XZW3aVkrXRwLENHJW88hYQKU4Lbbyd7VHf9nT9QhLU9qPGQZoGs7GKACULfy",
  "key37": "5niEhsoU9gg47mzAfVgMTZUPiZHugttVnoQxfKAsNw84qHiH26BRxya64Qc9SwmocrZyYHKLd8JcvW4QHsZ2zhHz",
  "key38": "5XaJABMtC8QGXPrQ5gbX49pegmCNyamxWe2c8rMrFFJR9YRvVb1GJg4wSQj8saUPvwdARBV8EiF8NQJ755MW8Sf8",
  "key39": "MT34Ft9FtucPmjbZc1tCcuS4XPoUe5k4p2z5XYdwTUgF2a2WhPcd2L1EaGBhcagiASi19C7AA5NucCNCqN2PJ2d",
  "key40": "2fe3TMw3kBM5mQJK7kiRSUtLSxZxUHJnvPRpUGX7fNua7ioxcfifPhwByBy9GrUFEfF3Vx2sDaSecyN37jysiXiT",
  "key41": "3MhBPyWQuXQtKY3FcjGDsALDGSvD879LXyjPcTy6PpvDa6sPpRbwdD9m9oDsKHUTzBGhxMZo7hQr87WcoXkCCKbs",
  "key42": "541Fg8zBpRdKYrznM4AHiJHpVMqsgwuu2sjsa2j2o2gvxbdvJ1g1g69HGtWytpHTiuei3HqkNArjG2mFmYjJEuiT"
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
