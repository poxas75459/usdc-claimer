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
    "51ssTtkgXwTdaAT2ZimBatSvWYRTbzRWmADVcoCEhtpKFyR5H6KXGRiCa3yPtf4KgiHQ5Tf9PcB839XdKiqCaXDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WbMNNSHzcUzfTfKSX3nxNjfdr3guq1Gx8xQXQ8nQ2joMMLBmuAydqR9J1hjSN9hPDVVR1PZbLKMDQ7KEu3sv33",
  "key1": "47DVmv2qBrDi6CKqTzgCRc5oc9d7LhWxXPVjLNaqGhhmpgVpeCc4UWqqR9d9RPCtYu741JtmCGmkb7NGqQrs93hy",
  "key2": "5yZFvDJdhsRqdK9VVkPqXixZ3SXKrRC9UftvfHuSgQSXDLzwQfVdWxZeSopRckkX2vTHMrkCcjA2h6vKTyf641BU",
  "key3": "3DUEJxGjqfMgeBmrzrU9tFYLayhVWgwVZjJPGrBtofdD6xnQsmPGA7fpSscYiZaumby8Ui2XK8zo5jvfZWCRndk2",
  "key4": "4odHe5KNAMEvyFikbbJHeFiEGpSNvMHejEuRfnBPp9SG2AaT6zicU8HKqnZJzGegj2K933hjKjJ9YA1YiRsYZDZW",
  "key5": "4pC2UVbMQNLFTLm3i1hUX82SPuYtjSXQ44bWEd9c6Ma5FyCakLUjBNvgoTo1FCUvehsnNCgE7bQpoUyZYCbSZKPk",
  "key6": "G93UA4MPndpCnLW378jEagSnv6VviC1ubceHuXu5FHdz8swFLNAATD2oiyxLG1rCZ2BAKNvZvBxsKzAyLQxUemn",
  "key7": "5CSvL92mvJrCaux3RnqfkGPZqVikCeGdvWTtBGRm9cPg6snE8PRRHhreQUiLnrh4MSniCNxVrHnBT3W9fPbLiQTh",
  "key8": "2eTMUfLLqRueHKM7HF4CeZLgUuNvUWrcM4Ler4WtcZeF23RNZq8FtjeaTQgnb94GnuWBh9CVrpQ2B5kcyzYQrXgQ",
  "key9": "2n6WCez1aC8wT1hQPLy1wvM2KkexRWjJpQ8uods2SAQ5yaEGcebta27m4ZXfEaGVuLh2ENxe22EZw5gsEMuhXu5R",
  "key10": "2xCFJvfYBpQ2ey2AykWqJBYzoVosJZYHx4t5N5BDuTEfZFaKTjxBFJyQ7PHVC4oLamPzuNeNTKT29yg7ji1HUQwg",
  "key11": "3va4sdvKkUQeoA6pfP6mpzFgrvL9h3aUgvXhK4oZLSmDPrXj4ngdj5ETBFeMcpgJWDs5RyBetUcyvGVvMCvugfHW",
  "key12": "5VUnZXGnLU2qnB4csTeanrkQY82conrEpMAxzT6aqn6GpaVZTPc5sNVG2i4apWGsPfYxgbP5LGKByg1C8egskde2",
  "key13": "26buC26JmPFyaWvp2V7DtLShVNz83bFKKnJyztBXbai4LFvnXGUe4L5bqhoMf32oXCf6wgY8bkYAG3VTJQTLnqFA",
  "key14": "2Pdi1ueTwj6w1bJ6bi2tSBgYsJ8gedLTUmAVAFTcoULdvk2EhZiAfGbNva7pG7iavTEE49RiJqHRqrWN5sY1YmGM",
  "key15": "4tXmhSqHVq1wYo2vxQXRMFLLRz93sukvWNzqmikPP1iW5PmBtMNQ9qgHvQUetsRMHXa2neLrWZNi477fhA5V6QKx",
  "key16": "3gqQnKayzFm39mbzLuZpBbtNKivwNuirxAAa8P3RMk3hKoTpVP9PynvnSBHRaX54wahm8UaLPwdXfH98Y1CsrZMX",
  "key17": "3AMrQCbZbG5Yhsqw3ZUf6dkGz3S8kNKLwaQzyYezEeWi7WkRFzQC87B7gLDvkn3rwCagffCDSJMV2chwXiNGqNac",
  "key18": "4U7bK2eT3Ld5KrUSHyJnFpoaAXsvbZTvev9S6DwcafgXNtN7RjfujQwxXtBZGGt3hMzYG8coTV379m9sHHMTnSTy",
  "key19": "q3gcYrCBQip2B5XRTX7GESXPdQhXuFgNUuQEydh5gxbU4dg27oF2Bka84YfyihLoiw57LhxNgHivfx8PXhkNLuC",
  "key20": "3CVbmdpBtGnSbD6PdRF893JeoVSvh5hfEY5mRVQ9DMeQeYHqHjqDoBZkcq42QutK6vY2NRoqKLtFBfTwCESNaKQW",
  "key21": "3kquLHsxSDWatcydmV67rXUQrfhx5aGPwJTT2Tac7iw5sdGVPvJLXiyDW7cTubcCGUh6Ua8M7uSFH2PSka5G8qks",
  "key22": "5A4cra7mD3v1HPY46CjpizUXu8gyffVCwYvN3hJHcJNRqgdAAVfgxC7ZDPWXZ3Fgi88GRmDWwpHQCBP7kwJfsNEB",
  "key23": "4CW94czBuK2x4k199eHmtj9tugfyBpCft1c4gJ173KDPVir4pz5LCLzP2ZZxeHaBVFbifBPXHiBpQXnfGRq3k3tP",
  "key24": "5oiT9tQzNF2WY1DBZcFr2friaAWTp6ssL7mf1JCzQpiHCWEHreuF6MTh3rwDzfNGxbihWc5DRHtj2usR4mE1y28j",
  "key25": "5iJbbMR9wQiErWBLhoVSLBqdz6zrQuvice3mSrUKq6boU6155T4baagZ8vr7m36frmgyUrHn4GHUWQFBQGVvE7wK",
  "key26": "4EZWwQ7bnykktqjTiq3wBdnxab1V41nYm46pjisWVTTFbDSUWLExuE1JQK8MfnW8sNnsjFjd1cKFrzvx8x7zhJ14",
  "key27": "jueK3Qg44vxmWDyCfaj6So1AuiYWcb87EZ4ZkuhRcEpZ3oM8mfZYuGFWbYCjfh2VR9cBdR1P8jUN67pTdpUW35u",
  "key28": "3E2Q49AqiBDcDLpVgG3gKxdZb393B74y5FhVAKoztEEmxvfHKuVALbS2JiJegKQfQ6aBnQdvRT9VnPmj2zPYJL42",
  "key29": "2Jj8ZivGczjfggzFWfBfx4KAbx8jaGfVJU7Hy1TBTSJBScqDvJmzX8sCYRKN4hUytFpLmcswbjUbgfK9R8b89BDp",
  "key30": "3oxpRdPsbj6B1QgLunwPyhuQihjuXht3x3LXQ3TdkoUNrhXm4PBKapLQcfnJq2wVT2QBsNGqMkqAkeMRYv3CZDHj",
  "key31": "n9uGZgMozFQ87ARaeMN92oFZLkmgTYLvZ2ptG7VCKbhFbBfnW1LtrWb5Wz7KeVuyQdtHtcBtnczgG3Hrohjbs6X",
  "key32": "33XVi11pDvfL1SVjCNVRCsV1vDc8CHwwM71ws4egsPmGJcUpawMuBf3Yz868xJQBJPPLFMzfWztjAgNQ4NXmdbv9",
  "key33": "4ugwgwyApNYfrcuTSMLo2cDL3DLNoLKY7kardRhGukXmj47nkxwv6ASTzsbN8hYWiPb4WaEzzrZQhnexzvtEMVwQ",
  "key34": "3i3mEbbQvZiXiNkp88ZKhAooQnWbSZbL3Hkb3np2hJyopCfKSLUSRAVwtBdx7vKj3ihsirEF31KpfdpQjevjq6Gz",
  "key35": "3NaTttMScbZdXvX5UKDPbASK9N622p7pDk5KaTEHNQFJ1Piu5a3BVmRXUuh7P5aypZWfL6zrozD6jUBWgjVvppZU",
  "key36": "5miWV6FfPveUoMinQHNm8Bhint3HzXDkqu3ikdVwk6c6VvCTNDCFJtFEqbzK9DUn3QQNFG2tirHn3yZbWx6S1VH3",
  "key37": "3caXQyNe379VKCxSQ5FevrpJTUx3nSyrc87zHWBWfpiW25onYxbcj1bprYV1KbrAE7Wjd4dm7JFsHCW5hvFYwKHW",
  "key38": "2Np3WRmsDDLtpMz6HfyfuaGifLix72jNFeoFK6xr9cxRzKojS1oeifoovuNsVXpDxbhNHXRJbKGXtfaKWAU3c6gC",
  "key39": "wLxJk6kRfVNPTYwTaVw3jrdoMbq11pyM9tV24KerEzCs4GwYX9WhEa9Kf6NudtMgj57YVpYm29NTMuvj6WjFajE",
  "key40": "5HooXdHoJDcHYGNsJJoWMxd24fkeF5oJHzUiNsKAKRsaXjSP87RFb485uuUsHegjgHDh9mZFo5uoqq4k6s417bxF",
  "key41": "48PMdLwqmNsuyJ55jcScNLya7sVMUfjgr54ZchcxJfZc4VhwDTEFBp2G533tTXLLmEALSY3CUxK8MA7sGvLUT8im",
  "key42": "4b7XRYLCdibgkKDFRmg8xm9bmaWS1vAsjzp1X4nRoJt24Ex68pLM3eF9JThsHCTCx6VBSCD4ayu4bLbTCGeAFEcz",
  "key43": "5E48atN3DcymeHz8bFz3JKD6NH4EtQxWzdje9vY4i6uos3cbNTTwQXRGXt55q5mygsMUdn8XrUy8rPduCxuah27m",
  "key44": "5rs79ihhoF1JUQGfhdb9p2Uo3a2J2Ycd1MRboG3BMZqEWjbWvxBSoX1h6WAS7kZEWvm2hSBh8bY2sHsHQ9dLmEzw",
  "key45": "3fTkEvhM6vS5Ffyoy6wzzDsrHYF2w4Hh3eaSqp5V7a8cFxBZh4Ff3PaTk1vVfkNuQq9p1iVrHTgaV37hhkF1d3pp",
  "key46": "4tf46rbnp9UG1njLXrBYr1qFKmdwXxJCmfy3VQt3jr32MkdpcUK6hYNW35BdF2QrQ9RxWPuZQxraXR8duUNTQ8tE",
  "key47": "5o72J1TsJP55LuHTPmY15RYxfGBeovwQ8XeFesdvr3nvBYtu9rF4ezR2GDtHfQNjY8yosJuFYpdQjWxH2jANcc7F",
  "key48": "2V9htBSTiaAqeo133kzejCmkQG4yD1GVj3sPCAYsN7mNeaxBf6iGr378GUDBhY3cmy6HGuRZRSmTXxcJBhZS7zdM",
  "key49": "3zgTmN6aopc4AE74C2WvJDUFo7JcYWhdELkrZRPhsGUomLbJnbf23NhEh1pG63bxsAyyfPiDZf8k2eSGgRB2uwRT"
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
