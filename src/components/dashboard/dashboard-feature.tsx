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
    "5THvosa5sEyChRVGjEV5N9XGsXAArZqiGTiJDdjgbpG69qVGvSNuVtS7tMmgj4PpMmwwgjWgrgRK7ZnYLUpDHAuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FbwWFzA8k87vLbaHBKMqB4TgBk59nqTKvF9Ha2KRzYVLeoKshPsn4dQ7AwPXYsAZur2b8XrnNDmD8Csmh2fi6f",
  "key1": "c4qerBJcEPrDxY7XUM6XibPYLXLRjniGBfPhK2ijepnfxB4EbyWKPL8btrA5uAFz25uuPucvhXZGrGNwp97QMiU",
  "key2": "3ytMiTfGyjCVz1VUzG3hpshHkvm32RENFqCD32jyFgS3vU5biaMiZ5qk5xUgKZmzUT6SHkyoMDUrLB3tvQDNdBUx",
  "key3": "vVTTMufVfVnHMj4YCTZKeDSqEB2TPg4erdFFQ5EJWuRwfRDdfMZWR1i7RECfJ8F9HQk6uFRoNuDhyyYHSgaxuYp",
  "key4": "5brJTy2NppMpVqiExDTmPTquMRiTdpEjrGVzPoSRGuxv4ba9A8142pPdueTsHbSzMFAGjLd77AmpiRCfnTRzju33",
  "key5": "4qQVhBY81jfCg7DkLxM5h3eqrZKxRFaxR3mAFjuQMKh3h1xBdNQj2xzKHmTJpwYTgrNyvnctbZXZPEAikAXNXBqa",
  "key6": "5KRaV4ZjQkSSXZrWUD7vY4C1uAw1wfppyohbKzuBPFHj7AHkh5zFcFi1UAmY9AoWRdBd9wgj2zVEL7Etf4r1P3qC",
  "key7": "3Q7dk83JNYtym1LkmXCJP4mptUZf1nxh5vquBJysMWx2GtomFPZK7a13WnFUFCDNozyeGVMgGLWBx27MyfafTXXm",
  "key8": "3eki2vZ1pr21SYtrGUixm1BNpLMKqSRf5S2Nkq6VjEw1ezPk85RoFSREfXK82jCCbvYg3odWRzwCWz1iEpm73SV2",
  "key9": "3mPo1eEE1bxnz37Foqz26Kw455C3euvwoQczaKNjXms8MY7ukn6phQWDnwXaayZSh4RVhSkn3k4WStXfrDQXYtNe",
  "key10": "3vQJ99kBxsqMK9TXbdiPQkCxqaHAGkXgaBQzeoxwfdq1XzWfdF26MqZLgsHgU6YvV86BHScYiG4PckEjnD3FxVs3",
  "key11": "45pcSGQwxfmnQLtwPznNcJmmkrMFfuPH3QDjNxNjtGzGtwYX9FQT5JkxLHzt36Mbv1iJn9fBxSBwk5dUnqyWrVWQ",
  "key12": "2iUUgUaeWhR18kcC7H5wSHhbFkLDwKb9gMAtaJPPVxGc79wgBt7yW9aqUr1pMDaiSrZy6x8niieM6JHoGLTZFxuC",
  "key13": "3B37MgG6W4adToSctZrxXxXwqxaHog2GiLvbeSiPHeS1HFGwHnya67WYJKpVcT1AigUD6sMXEfsipYETxa4QuRZw",
  "key14": "3tnCvyp5RhebMPPoSrXuMwgdXkprU491VP7MQWD4V6baEqufCmFhXe2zKmyiDNaehq4AwAFVN9bfgQczEcgj1WFT",
  "key15": "7EGHgL9gL34Xaq3FWEapPsyBscjxLLzsnL155HJyJGbnE4C3NS8xfgkUQJ4oATuWkHzVnQKa73a2P4nk6FoxjD2",
  "key16": "4of6RsbbvBnVHDsXBd5Crd4eGvYBfE7MbUrhwrhSCv9w2hyZF13H1mCbViS69fa94fn9ndLDHAfaP2UscDMXoZBH",
  "key17": "4LvGv43cr1TFD4MM1rQrmoDYQkJWzsf6iZXZNjNVm4zpR9F2rP3veu9ThgMzAfpH9hQwEWddx8fmGHUYni71crSH",
  "key18": "4ZP9J6Y1NLg9dY7m4rugb1YQzYmbSvw7KYvgzRNompQvvCJDpqznLZtQd8pGS7NEbn4PpMvTmtMAZHXnx6czCYqw",
  "key19": "5QABXFBo7VpXdsgUWP8aUNAgqfU4CGx1CNRmcQEazEhY8Vsiiw7fkiR5NRUhqma3ng1wgZb2vPu1gtFCyqSSRvuT",
  "key20": "5BuLZt5c18EGxRC7zkb2veYsHcybFEws2k4XATSUkotj3QVJEwPD9WPqTLUXKSEewkNttmU1E7gSX5MCRzhTfFP3",
  "key21": "3P5X9ZgrV9j2uxHWGdw2x6U83CWJWmi7rjGzV4X76cH8DvZg7skGtmgPTo3rLxiWmZuMojb9pyB1SNZYGKq59xuq",
  "key22": "4AeRiLyVmPEkAYy5HPy9qfhvgn8mTtsfDmeLwhVV4NorXe65RMJF7Vn2zoJ2p82fsVT2GM4zKk7WPTcnvPyCk8kB",
  "key23": "4fwPB7ugMamurHfaguS8c6sdiT3X45TzgLsdK6qrHomnskNmH6eW3xSkUVu2khscP2aQXG5CuPSQwezcS9JN9skX",
  "key24": "4CiNEKsfYj56upFPPFP8vzwoTny51eCpoNMNuRon5MHXiwgUz3tupg6E3WRrau6aH4sa8AgyotHdLK5j5gA6sq7W",
  "key25": "poi7An4dZ8EDTyfavPYpNYqyTajBEpPBRHfweU9DzmhNmJPZHPzLe8hj9Hkn61WaWHSV64DRMQvVtbQ339c8WTS",
  "key26": "yK7WXRTh9r5mvh1AXwXfAuYZyFugQFjxvcWhipSqMWXGK48oHf3N61yVqLqkfTB5UwzU2Fsf7LaQfwh6ocHshTp",
  "key27": "38PZQpNUnK6Ldcz62W2aNqHpApAvP2hX46NPnVBdvctvpJjnRSND3KoW6gPcdoBnayMThS5BtcCDYbsiZw645vNr",
  "key28": "2TsZPMYVP3dnERcrbcrwtypVnNRUqL2ShNPec1G12Wqe6H23vj9xuH454vLrE8o9xmNJstoabVk5xv3UpKBMqzYb",
  "key29": "5NyWUijqHr18DdAznHMLSgAEByTNzCDm5htNcePfwXVgyipW5QfXeuUSs4KZtgDQxbXbMgBHH9wfT8G1MGoGQxTb",
  "key30": "4NvXnKiK483o1LsdJaEGj1UP3KSrvbWpEpLEYXiRDwXFcGBBXcMHfMX45swgXGmoJwrerHctvMM2f1dxsaBqg5ns",
  "key31": "5BBDaVvmapAKMN2pJAauQwqpwTrQyzG3NwTaepag6eGWCnTuiKcaPCSABDj1MiACgLHgkknis7seCbVkicq8Mi1R",
  "key32": "Sj2kJdbZkt72ka4kEqoUVdMv4xt821J5gEGySeRSBN6dQzfKUb3nhEDW1x6N93PVHc7vyY7pANMgBLFkeEdZXwf",
  "key33": "5Qx98xjdpadodizsxstmvwFaLi8XGefVgW9J4xDyUSxCwL9cd9LJW6uNco7aVQc2RPzvMsZMrayvdvzLgMvspjhk",
  "key34": "2xmSLjSwX77sDnhivarFs9gipSSmt5THPCirzdoHcrPBBv4JYo82v9WBSzth8axrqmRfJLDc4ykVCs1eMnTt7crT",
  "key35": "5ndMH95a3c33NXoCXbtmoEVb6T9sZKDbxAVCkzZTSuXeQKi89kvw64dHEPrCaA2SkhDxY3R1BhePEdtdBvFMskWb",
  "key36": "5tJqrxJLgkk6hGr2r8CwJw8gPFYs998tVie88sZTkdsRPM9r7AoPyhwp2sp2FefP3wzNrnntsDduTTWNJ7FRwJQG",
  "key37": "GT8beY4BpU6gQ9EZApV37mSLTyHWX6xHdNkZdXxDcTSCKZSMyV3A1qHqxcQvnCJPt1NYJBgdDehXg16RFfqB7vf"
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
