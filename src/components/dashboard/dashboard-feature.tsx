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
    "2zcAd1GVtbd5SBJKz8jbi6JyxgRJXcLKm8xFgX7sKN7DFhyZQRFursbvnKfsRH2pG3AnhXrAjyk582z98EtFiBtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w51Pn5RDwJdJkoZD2RYWDPYPd219BcbL3zzK9yJ2sTrsx6AvgVNgfNueVeXjqUN1EgehhxrANq7GkmGsaWWnCTE",
  "key1": "3gwTMBtr6PnyebS7soUamNPWxqkPQsMMXwmcQKnCK61cqJaYz2M1RwBFeBgg4wgeD1PvXLbKikULcF2bXEAA6t53",
  "key2": "2QEuSFCGW7uoV6vMpxSdbqAKsm3KqK2KBs7NY983YtyHhozCtqYzyTCJZhhgQmG28ZeFqXYTwJCU2VadGYgVf2Ub",
  "key3": "2op7fHebTbRUZCfn9QFvBXdvtW5c8whqo2SFUNDg2PKrFAuuXKNu1NA96oSx3XTSb5bCMHxxvp97CkWeifVZM1Pd",
  "key4": "5SWQcbUZic8a82ZjjTFbWdJo4wjjpK1RvnPMehpBPy7vaDvMRBiF5xu73tG48rnGZ7HTbY58DhxT1ft5VTfQpthc",
  "key5": "3tVKHK4sbKt3TyMWBuwHc7YkpA1FkeBkachmFoiVYE6w6y3XL4NjX5bdwmn6z2Cs78DbigCEt8bA7wSsrgVmvDBD",
  "key6": "2tZp2RP19vvQBJucertK8UNY4bPFmV2JFA4yo7DM9NEfnfgJdoLQnQnLVWqTnim4uSmMieGxyZiuWteaRfL3yvFd",
  "key7": "2pYe6fn4KvYC64T4Cn97ANk2Wnm4z7AB1U3WgjLrNtCcay1YqR4S1FdafrKBLbs4qptrhr5CDm3Z1PVc4k8eNJ28",
  "key8": "5gTsEtrYZ1BjSQXoqhe2Nkm3TLoZQTqi4PLJhTkC8S2DmPHJD5c4iWaREYf1Fs1D3onsbvgNtk2LbPgsPd6aAPvm",
  "key9": "4KFPHTXRxNbyqt3DGjm62Xb4VovDaPYsU2vm3QwBmswmsvwXzfx5oXwc4TrRorR3d4awVmfYtPXACZVpokFUUYDf",
  "key10": "so4aAWdZQEPTtJHs5QMzTTfwShavmyTmVmpXhBN6c2HeBtTkRHXn2wvtJnhBo1oz8N7oiUqi5qM8R8o5S55ExUk",
  "key11": "4ykFFKmGEXsEH9KzMmMGfsucEQc1Qv1zPCw1XVXSYJUpSaSmYRJsNpdbuCsU6rZyqin2rzBSEgxTXT7bewvyzjMU",
  "key12": "4RVBiiKM84cpY3EFacMpUkUE6UKffo5CaQYwvUjW6dMPVNvRqd3BdnEcxZtf9hmbDHuDLKssP5cxBWxmNpKDnFu2",
  "key13": "4gfhDNSmfZyrvLSwsmYs3uauNV7gX3bZDWmtmzcUQdxV6V5KGJLDf92XxUBFtYpBUJCbGHCs31dXMuqSZfPYLpDp",
  "key14": "3Lezn9WrbeKFMHFsPndeBeqptFVTewxxFXGmVLnnsdrkDmc4eaZAnXtYKgdckEDPZe9yxhKYUB8jb6tMzXys9trb",
  "key15": "jFpVnVU4NuXGuTNNfNBNS1X4Fb3smJfWiBHWdb3hngM5WG1JyNsmB3C5WmotZmppqv8FgdY8Z2cyoiLGBrN4qQv",
  "key16": "H8zajABfDWoJaTqtAQZmCBnhYeH8y6QGXJ4Hr24Sn6aaadaW46UFMUwRnpxjE72u9iAdZXzzZtmNtiD6tQo58hP",
  "key17": "5roznYuaSDVTv1GMRjYGQ24iS2onywyKLXdFb6hPKkND9eUvHwTvjEPiLJ7bPJxuiGrUJWZB8Savck4BEAKnHeFV",
  "key18": "3aL6b2tRQGUWToCS2RURqWRpbdfWUiRiaRKggqh6XPaNJ7HDCwrV7oWoPFePMExBiSpWtQd92NTzjRVrcgsC5vPY",
  "key19": "4EiYEBqaLS98rJtzh2TA45D39eocJvU2r2RtLnv4ui3Jh7iuRyRBiK6aRgkWWeK2viKSpKPt67BhnZSsANT1KavF",
  "key20": "5nYKZNUNTCteXXVdZXRaqfAJZTpXXNQ9kB5arTDrkYU6mmYmmQL6SitvYEpxqydU9ynuFbAFtUnsyodFmfu2Xcwq",
  "key21": "64MfmEua4amgA8GgmtzJVVEnXwLSRuPsJbSsk7CLNRTxptjB8qmfBky8imaobKRa92Rzghee9KQLuRhtBbMY11w",
  "key22": "3QPWUxLoBisH1rVTPiaqtCKt7rv5Ua4116N6adDLfGaqgMW3uoLX5c6PPfyd6UJenZF2diMUbuauZy44f1ezHUJ",
  "key23": "5EAQAT39TpSvVkGJbZLYUYJ94cSbZb8wZLMCKYE2HvC1L7JvRGdbxrDi8jRR1oSbPnTYd8FGaChwbtm835ApmSVb",
  "key24": "31wBWv8M8fH5DLt4ZazgQP2GuEu5Yksu46s8XJ74uZS3e2CBs484n9vpMnXqtjqy4YJHtcpWvEXJkAa97nimxBY8",
  "key25": "5TzMGj9Q2RFH7JaxQaE44sUcp2dxozUqtEwu3gxGdhxYesPs7LMEN35ZmqNGw2Vw954XBcTJuM9Lz297vEXWprKJ",
  "key26": "47KzaatUV9VepYzFztswJSmy8Xod4b8UcBMxrqqsmS39WX2PnjNTPrRAPt1R3pdk1wg3Aba7G6jyGBRaMeP5zhxs",
  "key27": "eiRoKyfU2f7MskGe7eBBDXBtVpjkqSfHC5jUsoS6Dj25dfkYeHypUx79U2SSRsoYLdvqNtFELHyNa1zcVezLbbx",
  "key28": "5JZBh3B9DkkWj2zqc4Zpp9LfiiXfA5adquUm4km8LcF9MBMb2zGvxqt5AUbMHGMzJTRckRBEJ1pKp5t6VoGG1rFu",
  "key29": "5zFLUnGSyYQbvsWWrtek4Z7GnhkjhST1JbURoqhVhAAFaRN2xJcvXvMmbmigqCXJHhRV5FBcW6WGNe9eg8eWCD1P",
  "key30": "665jLSE48mc1fNyES1ojYSEGUm3nXghwYTr5aDR9xDrSvA9mn9SqKEyhog4iszgRaDPDj3bc4RL183TUzbmv4CGe",
  "key31": "3JHX4mYiZWKc8m8iMqCiKsMEzKsqxmzdgGKL3Pzqn7qaVngjvEKkEZfgNBLpar5qbGFPXfr6sNuVrs42Uw8BsoLC"
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
