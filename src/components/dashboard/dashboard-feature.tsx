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
    "D2Fys4rhBjFXsLiL7FY36aubAtcdb4fK1QtjcvEKpEX4vHyv6CJ6F9NUimg6AEp9y5XM2cDrUHjhgWJ8tMUaLpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58h6qP47pG3jfGaRVNTJp7zSfGCsGseKjx8CckFjDZaDYST43KJnE2tZVFSG9tqKeuXyLFKNZu1atMz1bAoX4UUB",
  "key1": "5YGXXtitQHWSTnLv6WRNeUJymbQJDrGvBhvEzts2Z91cXQYuW92CrqRCMTR3wEegcPhkaHasd2cKDYUM6xu6T2Cc",
  "key2": "2GuyXGFFQ2Aes545ZJjuP7pJwrt62Vars3PBFvD6YP7D9UbMfK7JVQZzJ8bT51VruXbBBM1A5Xm7kSAXyZzGbfUu",
  "key3": "4YCT8hDaistJUGuyuoCd5Td5YggLEUACUpnkhzzkV2drMkfc5FiBRcnkuhxfC4xwMy73eYvabH8Q7t6CAgQ1HndE",
  "key4": "4x9wyybkFGpdR1LmYzaJ7vkzAxqv53pDYKTxdYtvArgr1nkr2N1X1vwVBo85vW4QqUt83gEdekMgZWusAZc7DWFB",
  "key5": "eesN699xT8Jyc7S1ydvdPbecGbFhXXtMX9NQ2x5RfSbJ4edpxxGBXB4T6HTqoGNWXUe4G32bL2PjZREb6XvwrGo",
  "key6": "34x44KPU3TvVtNhbf86Qk9EYPSvSrrTL7UhG8SwWYn29mDuvLAyVG2AbdAPpyDHe4G2W7NoTUgEDeCLhpix5iZ8L",
  "key7": "2terxWXPQP8x6TqW11zYh5MA6jKu8ByiYBhFnyrrvpodTGQX2iUXYYfsjYyLygogXcXoQD8b1N7zbG7ttfq8Togi",
  "key8": "39aLgB2zuhU1N1JG7cWpvG2dkTPTPUC4fr4GGhocDBPReZuHfKoqpRmLdQRfmGodvogTfALZLu9MBjq6bWbsFfC2",
  "key9": "3EL4RKVzgPwZAM5hnf1fM7RoAFwFX3w8nWvqbWuHayf4uXM3CMuNLLbaBmRwaB3LhzLgpChfAEMukNWJjDefTPMR",
  "key10": "5YYCpQJstHWiyNBgYKzngynobS9jMGXUVbgeJwg5QijzjeEn7e9hM7n87RVo4hYu97FtDqvJnsvGUvitdpLbv32K",
  "key11": "4CEMu2NitopM9HMNxwyHC23DJFCpYRWUJEGheRyH28hC6TDcSSDpfe8SCqzuSmg23P9o93FD8nmbTh59zxV3hmpz",
  "key12": "411itPq38dpSqZvPkHGC87CxumDaaeXg2NzZKyAwt65UaeVVMrUm1iWWnB5ZyAQ7DAuJjuBSnLikeqw2PwUMmyW2",
  "key13": "5M8EzmY1QDCWAxx3mGjpEKrV8DPQDPeNCDMmPJ8i3vrkXWtU2quzgFU2B4KM4qPhCFVgR3skiS1obD9zmXVSHSLP",
  "key14": "3VmiHW5NQRpgToTvwHGvk7bbo671CryHgxhzitPSkkr5p8Zkv2QMAzL5npqrs7m7yEzFmmY2LTwwPBxheJKyKhdq",
  "key15": "FpMqsKqhQe9CwBk47U84mnnpTFvkg8TjwmJjhDCT3w7AQsku67cFj5LK5asRHACoeZuwtcD9Tu66LHrD34BnSFL",
  "key16": "3mu3oNLdfa1vwWwHm4ZR4fn7AAmMkWR99A734y8yRTYC7KXSRV7M1Yjw2XpK25i55HYqubmMtYFnfc9K4aFtFRHG",
  "key17": "3o552bfv6nLnKozmBmJj4Kd1hygT5xSviADcS8i5qv5kprXnyNEPsjuHbyZUxMD36tTvcGLG5C4TxGxSn6cxbxeE",
  "key18": "58aSMjY3Cfy6az3zSgMCWvhNJKYoqf64SGoz51hob7BqNTUrVnrAVbHGUzkuCUx55NKigze1xrj8Fm4foDF7s96x",
  "key19": "25iHwEu29fZYJp62exRStPNvGdihV87FxMe524HxH2Q3t5yZDhdR3KTP8mAPdC4rY2hqiNYhTMFXyYhmMM6RGiaA",
  "key20": "3mhT6bUg4KaAXHNSvb7oPLEqWQbwmHZ4FeF4PP6WKCv3XbqwYpBjh1XR1Mk4un5yW8mSerHZdnG5XavcKVD6Lxok",
  "key21": "2q1zWJsfnq9V81aSeZ7DophicpVkHKFkVZL8TwuboTDduZ6bTET76kfuPxL9yeahosFQsJueDfsmcVR8SCsDk8ib",
  "key22": "2Ui5kHD6Jq8rnamNDxUZRqZ5NUtMMMV8oj4d8XoHFuXyxmTn1SyVnxSTPLUY9EQqngarZK9dp69kxwvCWQzE8Shj",
  "key23": "5hGR9FzU2iQAZ5Wri1eD5BH1LwYPGyNoDv8EVDSu2ejcqyYQAxoa8Wb2krCXz6eVWkTpomzX4o5i49WcvLoGrrXf",
  "key24": "4hJf21bxaiifMq9YekNdo2qijjyqUrBKP4AqhKxWn3A5JKGrVsZHmSWGWLbhYoxfW9NUb7AxLoPNGLWvUM3uzdQd",
  "key25": "67ArkDpqwj1G9xcb2ntHpSuvm3wLdmC9kczxrkzSQhBiTAov2KLMRnFyycw5uC65r5FWLVGFersQnLHtY1fpammH",
  "key26": "eZ61TGn4qT88MdocyBs97cEwuLNNXMin5ZBkbKJXhDFscvrwRsAk65k3VUvB8Ck25KBx5yLDdoKNbwfX2K7hcVB",
  "key27": "2pPnN5xRC3pX5SvVity2nRH24GmmqhbBVnwfnutvLVv9SB2KJM5odCKp4xw23XmTgL2c16WFRoGt98acMsUFS5vd",
  "key28": "66cpzRKySQCRk8vW54Y8v6jXHqEu8zUu2powMqFicJn8nyjrQwcvw7aQoXHx7ydXQ9quCiW8o4P7HkVnKzGWNKEt",
  "key29": "5w6X3qneySMF8kH7s1nYpedQePZngf3KC4g3Td5NbrJazEG4vvEhj41KAeZqAh3RyBjTkVuSJatD57dmEVdHwGiU",
  "key30": "2iTEzQNT61Ctnv2tDN6qAgXog4YGhiXYHNEoU9cm91r7rwa7Nfshe6iq7cFKMbe5fV5A4MyPgTWaUWX1F4114HPB",
  "key31": "5adzEFdLt5x573V1g4tSdPqvzuAAGUE5wXppozDRebaJp8f5cPkM28e6oAoSw1wi1atB7VqQUMSDNJqRRQDSA8aM",
  "key32": "3yDk56fUW7YDozBq2tbRdgVBmgT4gHdY5QE5fSv3wJvptkZn5ZTiW9ZxWxnViQ1xAdaHc7AcLgo3YGZK1jAowvJt",
  "key33": "5G8j5e9jNHvuFUyD2gUCiSRHuCzpFkhPThZYm29SKxLC1Aky1cyoSrGpQ623VuQYt158szNPboHSrN4WK7DLZR8M",
  "key34": "3XedvzeMpN3dxeQqr7ZuojJeSbK6ghkVQ5ha82aJ4dYpQEBgbwHjhhxuUpV1zyp9gQLxNkp6gCc8NMHGQVEAR7Hz",
  "key35": "5L16J6XpQVSerfijacY6ntqiLNyfLLM7hY8heEy7oTfPQKnc3TPuUseScrQwdzoX59rqfRe5cvfP9QfAEUiQ4Bt4"
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
