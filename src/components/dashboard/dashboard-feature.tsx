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
    "4PfJPnycyZGGZkgn5eMf2VneFviCnaGJvzC9NkcNyFfXtQvzQ6WM5JKELruSSKBCegc1YAZTL1yfVe3MY2gkeDYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQevHSByeaKrXh18y2GS2c56kbN7zfZDLKCmiUnMuzLDdBQE4ZDDt6jfdF3QDkau6NfKFPR2avpBicu4FJQayLJ",
  "key1": "2NkMUio22nqGYUFTCV1YAZgdjhtrZd9D8TNP1Fwx97oz49d4rpREM4uFXz7hpEACbhkKt6cyGK55orD7EFNkYAWx",
  "key2": "4iHi8taq9KkxZJ1HVgQ2BP5WYCs2K4nHHFCxTJ89kaEzRVvxjNYRQBbmLddKkkRvCaJwsd4uAf46oRcbmT2bnq4S",
  "key3": "2n2zXXUXqchWH1hEU5QSFnQ2XJyPsi6mK7pkS9UbsWp4xpsdwpek2JS2VJQm4fVWooBhBWcXBUAQdpGp6Pz3hy6G",
  "key4": "2MXiZamVzaKbz2vCDDj3XyBp9DVJvJsUyUEEYr1aqNtkiVk4zcxaM5PeeBSxv2RP2LP4CWQ3iTUdNH4Lx7TjDkCS",
  "key5": "5BuHcfb195specvsxpsacwfsTvRTqnu9MjSMXSDFCmtpYHMnWwzww6bhK6rnJCudRyt552BNbdXn8JSYW8JDczj2",
  "key6": "27avDcTFGTW2UweNCQhfFSSwPEoHb2udnz1KDyLxCSFxrBt1YLk44KiDf7m6sfrgoaP5HkNGCKMwGwmnW4QGmL2e",
  "key7": "46wroPXTjAn3geqLCaJTbuK4KbAeEVgs2mFFZYihruojhTii4uHfFCJTjft3ovJcjQGs14w7pmv5XivuPUMo8hVy",
  "key8": "5sT5Y8kHr1kyHASimWcC3v8s2HvLwLRwP6hj5BLqtXAZqavG65XKW5k3WsiLhcnGuniQRNNXS9cN6ZNoFLQznh6x",
  "key9": "4toQ9grM5W1nt1x5ksR5sS6mJLPMdJ7kVt2k48QWEhcAaRKd3XRY6vzZC945uNj72Nu8xFKi2b9h9rgnuabi26m5",
  "key10": "29kuyWKqKnLw7yykUAu3JeYWAFVUtyJPSMEd9Gss4UmPYdd7tf9Hr4nGCEPWZRpViFcZ3mowxh6FyVKGizBbT3bD",
  "key11": "4Hbw8We3o4PZor7PLBBcbvcusJThBcchtmXzbCsA7tKQyaXS6CsF4EpxeecZVCKoHBEGDmUHgD8pi9Xk9H5kXWib",
  "key12": "5zeR6jdwnr6zC8QZstENzgGEY27bmr6wq8BBB49V6Qo3XU3MhVG7ixTGkVFiAxeptHNNNT2Mb7B1tSNeHkSHqEcU",
  "key13": "3TxqArJR8Bh6MY273czw1rfoU5BdUhcgKstWVQCsQWB4qMCjfe6RGBE4M7f11tYCbqHxYjM5NcrgSKZ5gEcZVETX",
  "key14": "42aKwjL45aJntP1eqVnoDRETZ33PwKXGsN12CD9nqJy94vxvpjGChJxzrZP4n2i4fBihUdqUFKJDePzGGECuqTiw",
  "key15": "5isxifpndQpv2zZvEsWDyu2xRRnsiUzz5zyjh9K61e4Zyr3dRiNPoxUMUrphzw6UznBPpDXp4aRcBqwZnjV5s2Ty",
  "key16": "4MZUSi8ppRTuAmMuY3etMe8hVCHiR4eaFEv9ZbDvfCAbi7BMg4Y7H5aKdMGYX538eJoC56rMwMqYTnF5w34aWUC6",
  "key17": "5NP3EKt2HKq9sowqiabJ8kdoZnBHjGXVnVjdsjVgagvNfmhxib4nLUjMnnKYKqP9WAFBzHjsg6jUhDoRZn5aKn2q",
  "key18": "4WbM226U8xwuWTcL2SgrzxcZZdg1af9XvHBs6VS9RCxdoPTDXPKdaxG3QYXRYEZiJHipZQFTm85uCg35MY6uSiJv",
  "key19": "4tx2K1SCHp7Z1eeF94fRNrgf2nbFX9DcdVqifH39nFnGTFkrhnV8GJ86qmRE7SKrReiwR3wwL8UMaNTqQFL4CV2E",
  "key20": "2sn6pctMnaVH6rkGhRRGL2SLUijyw3Y6oWv3rQg6a9yt1d22WLqn53VPERrB3zjQQvXVuwbE4894JvnVGhpBdM4P",
  "key21": "27CXTE4RCogJkcdwubzWdDNT4TYvDBvggLuHmcXz2fGCiAmnPpT34MyjaqMtiCMsfpcPPu6rzmDPLB1SMVEHZHh2",
  "key22": "2Y4DvMHKjFxuAxfNSnWv1iy5oMBzjQg7SnEevbzWNQqVNqwPD1ibM75zzyqmyJkYrM2uko2kHTC55NfGEF5Z6hov",
  "key23": "3pGSC8e7SWsk9YKys9pAn1EHDqKrWMcvcdqwf6V6P1irV6kNGc1rWuE4vZdx5MkdfGg7PzKZ7963RyJxzK5M6zgK",
  "key24": "whwUXzazEnXnYaMFxH9oaUTp3dCe3U92EFS6mzz5aZHb5VRsy1m7qwS27jikXrHtEHPpFDgs43bjRaMVDw49xir",
  "key25": "FgwUGLSQudARpyDTU36KCPBQBadPXRmaepf6JExX1QUTaPVychWwe5c5ZY7DeJjqGy27USE4KLTqxjA8biHaFQx",
  "key26": "4cfGFM8jnBCys1XSxwS5DXPPUDRfV2r4w7HWCoYXUSWpbVYjMDNz786LfCdHQSKzoXDEL4NRirfk2pKU8yvy1NLu",
  "key27": "nzN7XVRNgAFZpgoF687rPz6jHC9vZDPfGpkysfUAJkV3VgqAL3iQ2Ybc6vXskinHCA7vwNc2vZsd4ufqohSmfRP",
  "key28": "3TGy6zaSYqp7SRdipTeTx8gPZCGeYYkaYLs6YAPkJFdQ28cudmhEmuUxWUFfDEmSLnQf1ac2rJ7Z7PW9wbYXiDNh",
  "key29": "4KFbNju14fDmeCjmKv97CzEcvoDiriSnPdJUsQHtuaG6KKR9ws7LyDode9mKoufcYfjdoAvYY4A1R6KeN8y1G6J",
  "key30": "3YHkDAf9uvjEM7wZw566z4CDdNK2vzHTBnpLrTavQNZjE43yQpFwDNF4Y48Vcstm8PfLiDttgZjhwdRL94AuiQ9v",
  "key31": "5HjWZcgTFnatgHA9bT6qzSDELCHsMibSrSg94AzfKUyKA12rAvgUshyBH2bcKURTnFHCd8peKDWbhQ5Wd2y9hnUH",
  "key32": "2TzqGNVkdzZdVTmhi1HKPBLwFHWQ8dHt3dmQxqazdmbjT4ocRVXVemBsg1dx4VwdwPHsC8FCD9kvtjYm52ApH66C",
  "key33": "421N9L5p1ChxtV5KnGn82VYmVhsM1smVzP7zrqqvRSQuDaZi3EMTW3n6DkYjUjGuUrimoQcuYoMezNxNZSSyUS3p",
  "key34": "YpVfn1BFtPBijQThBBKMaXkqRXPvUTtD8ykCLT7SHF2LKQYgHhQn72a6uj8VLkkVrjUNUkcK2jSC4GTkMn1bkY4",
  "key35": "4A3ikBuCxCizeVEK8Wn9DZpFoYJ1GLHbgfGdvGMNamsNgXeS1rnpxQPg74LYKgNF7aPP1vp7Nk95GYH7juDFwsvu",
  "key36": "4LNL7ZqikkFGQcj2jMmgmz52QrUk8JizRSFdvR8V3bE9md3kX2kPLk2eVMpgLV7SxeCb7GR5kQYdbpMsxHBkjMYg",
  "key37": "3j1TjYAEVuWfiwakDQfF3Sjg9Kqj2dzmawFu48GV8jJ3dwLCMkTz61BXFZUXqAsWZB2jrs9GioZxDSoY3iEkRKEs",
  "key38": "5J7AXTuzSmEFfD3b1EpKVscKS1J4J3cBAcEZe1y3FzsR3nggKvr4oBesRch8X7zXXfz1v581AW3oe6MkxdgKLMXS",
  "key39": "2XZqfJAmc81M4gpX7GnRw7tk4UCRreZ5qs9ymTneMqjsAeduoHX3bTM9hbRVpJRShZucNSuXQXa8xPdH3i5gryEA",
  "key40": "58ZkVPsTQeZKoH55V5sx5Lg9S6KAkZVUfmxDbq5JGeFeHDbaMhRscvCgRhDiCipiXmJweiwPk6ga57Q2VwaLuysp",
  "key41": "5HkkG6QWLEMoAXwW1b4M6M1mj5mBF8bAeVsjbUXJhx5eEbTsxuXvABQYkesLYyhMqYMjqeDrYBZc9V7tWzD4EC3x",
  "key42": "2kByqedMG6ikfrkbyHrEevELBdj83mj8WFScEa56QAtk379zjvNJBWLbBYg6DqcVxsM6fTu6RF4X18T4DexgsPpj",
  "key43": "4P6whqd6WAST2T7VKxrnkCrCVc69krdD6DfNgLA5evzyiRQ33qViWHkVEWe2mgFavymR6isVKuJM5dNPWhBkJto4",
  "key44": "3Afu9UosVTi2jM96yNevkUKEsafurtq2L5d1XQrbi14hoaB3UPVFHaEiNT7Tr9RDNxQzNxc5DAdpkYDPkXPEteMh",
  "key45": "3pz5A4ccXM5k6fwwR9Lp9ta9TzkG7Md83aZoWdpcuQhXzq1g7KtdUssNSL51Euh5hHYCxKB6VD1bFA91Z7iU5GhD",
  "key46": "5eGWohQdzHwMUBPuRyBQsY2XeYB5FxH72WN8p1jCgADP5Wg9Zk4ZdNw2tDLSTCqA92PaUdUNBubtHwhEUJTZDnn8",
  "key47": "4nM2iYEPK3i7xZo7sS9oYDxHNuSsAN8XpKG4VednGfXVsQNpzjZZihXNqv13cvpJFLjrWt1ZmCMWZEeY1vvYoNRN",
  "key48": "4kPUkgB2PctzX5trNzMb73qSRqRv9GWkCF1LfAYV15KJsu7TCzrWBSyWTdSDz2dsSkzMRZxwESpB7weUsahTkGpT",
  "key49": "5VQ5GcXuSLJ6dqUTxe4C6USq4qnUmDUzm2t9WmKpvXyiWLoynwSvq6Vqo5EFQT4ehpRZwCaVCWyhnKXC71tr3MXp"
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
