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
    "2qzaRovKJw9j93m2qo2i3Bb2ohc5DiWwfdNWgwm4VPezaAfTdT65aXBmU8UeH9SGBw9fZLWC7fZX1EGnPEpFsSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298kt6gmvweyFa4Yc6AA9L6W9UEHh2R7X4ywcJpzTLugdP8WdA4b5HfCW9rF3Dp5wgxe4qzMnQxYry2dDATuEn7y",
  "key1": "s2MePCfWA3BJew6mtWoWEE5EB4QLYxAtbxULrKxM9PEX27RUEargwpFKFAKjKiMS32MaWdmaYZqGS3ddwDPqhKB",
  "key2": "2CNP3hnrE8Q33oaNeSXinE2VuJ3ft4Q2TSj9Eb4YK1j5joePtD4idfVvXVcoFAnefKopDKJKBX33fZmnagk6w6tJ",
  "key3": "5j5W7qaAtscFA1nTB4vG87WzHuV4EQLTmT4VKSG1yPpAxqtzUrc5xhjWWJpDVhZ6VDEBiMGwG6ko5ud6yfJoKWk8",
  "key4": "3N9atxzTAfTK2uLzhH8YoN4zfqzh5xeah1CuB4SvNXafVVKxEKimq5qpyRk2Li9cBG1eLRntM1czAndUHfsSi4H",
  "key5": "3AfCdfDKHfxURVLs6T8QP2F7MjnUP77XSb7s94tceqKcxT6FRpJ1xjAL2Qn1h5cft6FtgJe4BagiktLcP5JXEtre",
  "key6": "4ejo6rp4bKcqF2ysK9NVdJxrc2ei2L9pGbahjbQkp635v2u9DjEw9fDbas9WMWYian2Cnimq6So76gCSShZZ7GV",
  "key7": "g54oHvCFZrzNLhScmyytZtrStzkiZEnv3YDkE8bED4ScVje2DUvB7S4XtqZLJbfmk3UCGP6QhGtWWjWFRHPaBho",
  "key8": "neMDrwKi7b4zZTPmzVd5VXaQXq4HQaAXiVd2mxX1nYh7iwmcGFpQyzru9o2tu2RfLBHpTNW59gzj3hfoaPxP7Qr",
  "key9": "5LfaCHdinhCg119CYU8w3NG8cn9b1YNATpZmBGSbszTxMZ3DHgXXzpyoYN74k5rqjm8SdQf3TERJsPfP4CRML6dd",
  "key10": "XNhaNDATdqicYwqVe1zMfTuMyByPESRCnznfaE78WMh5P8sR5V2UagNVT54n2QAoAqJMvcHJPaFaCL4GiYGCJMH",
  "key11": "hVwqwsn6R8EvbWqpQq83oNxqBM6YfC3oAh51qDeHDuSw21DWMGFBdpX5HjzoJ6t9aJUcFjLb8W1ZzsDbRPp33Ej",
  "key12": "5QtjLm77LLULdEoXtEWChukKZK9dC1pJZMjn3TzcSdfQ977yjPtpo3Kfwn54qVmEeHSoNqY8MqQqPFxQqTqQCPyj",
  "key13": "2bbmCEsQcBBHh3egUCtYg6ivFNUhdLcKaD9dP9o9wWHehSTWVurc53qWMhsassGWqz7w5X4YzDCfcUFHfZz2PgY9",
  "key14": "39v73QMj2YN6ZU5SnY5CurZqxbXmp2LtqXwCwJW2aYEJVsJRj7RLYp8pbx4jNfgFDVy9vpNUVHJ4f8LxLexQhoGL",
  "key15": "614ZDU8nSY3YFHfk72b7VR8gy41yjRV3A61haoyeYCbEBNvKrEUd5wsXXx77vEb1m585JyhTtBikqFchSozDWG9u",
  "key16": "39omsi7Cu6eBLfAAGmVzvWLVQxVbpeYsCchhiCyrc2Agk4Gtmm57E4zJSvZQJ5APbXVSJqmNf3MRbrg4t2y7Pdc9",
  "key17": "2bvZiNDUD293HKBM3tEtwbUdUECpeUBWvm8GDpufGABsxnvzkh9QcZp4d3MvcpyRn5kAUMmoZKgQt75eHzpgBJWy",
  "key18": "3jwvJR3MkmbpS5HDM9YG2ELGgp7zb9rtSzBmbzutvS2Tuks4L4RL1fhzJZA4B42trUiU9mHLe5VDebFDKynkNkfF",
  "key19": "2zs1ojCgmfUqhAMmFQqR8zsBayotTK2jUwJT4y8t3Mdkf1VcFQNqxrqqSE5LfBwz4CM3Aqkfjn5iyPGzfsmccyQt",
  "key20": "5dMoTH17JujrsJU4WmWnfgNvYmN4m6RS8Fjp4WEsXEQU9C8THEiGTcLumhbUDfi23XDCSB9xaXUXELiv7N1ZYiQP",
  "key21": "3NnkvTFemdsJA9vBaygcX5p2tfbTWiXJvwXNzjnLN3NQhB71Nsb8sttvAAVTAxdSjsbpVJXN8W2itg3piibmwWEF",
  "key22": "4RaKcoJc7T2ko1bs7LnKZ79cADpU32xfimjeguMjtMmTH4jjyZiBQZKsfabLmGQBim2CrHc45gwM8fD2t21HzcsC",
  "key23": "4YVG46e86FLrCimF1s4AqkjKzUNQAb5BDr3ucoFNdghyJjDzn6nU5EAjf2cAjWxkSD2zXhbhpQ3CcSGLCAoKWpRT",
  "key24": "nWoDPu2H9FTnFFaJQGtJ8oAKKFURuTzeVaEQ7qHy3oP1raS4DLUugqrPEQ5CFdzeziZVPxgf3bdUUQpsmmaxtfg",
  "key25": "4gPbyRJcDAyXTpiugQuy17rZ62K4rxKwgNGKYFdfLh7yz1TbfCowJLMzHiC5qCrahLntSW7vnG94quE9vKY8V2YU",
  "key26": "E2tnFYy2K3MvYBpLuGkCMEKNJmHvT7FEbHp4gm9c3FWga4wzB6w2FHao6y1zcofPdQsMn3nxXmE7unueNUjb8EV",
  "key27": "5e66Py7BRxx5g9mcNq98qFukUet4Rk3mXJQjuuu7oGmBXV9FWJCnnL4vPd2KHQfUGLYbgnpwLvXQRhshz7BRvQbz",
  "key28": "pTkoTrX6vALQzis5N3Jg6TJpZnrGZb5EBvufiMg6zLXcP8p7gSn45cBpYhGapfEZCHTdYF8Q2B93o6ezJFSCDJ3",
  "key29": "46jhGFVWc9re6Fnz9p7qbqcQmz754cqET5q4GhGULizKkQR9wzmuqtaSMEk1fMftxShWPY88bV29FESV9jGEM1Z6",
  "key30": "3qzCYqWmuKbDrwbwHr6gYLwYZG2x9s4prNdFnt7z2jVh7fAj8L27muFyfz1SHsQVGCWmEKj5iVZctmXBfV6NqVzs",
  "key31": "4cx28NH1aa3GTcADbH37oGzVpMe5PomuNNxLC7fW2G6GV2MUqXR5vrvx8Tbuba7gVtSFRYBf2w2AQ7QkFc5Mai1h",
  "key32": "4AcuyqXTiYpFhEoLNpsu8qTtxBNWtPPf6Zfp2BEkUuVGaXFSVULWQkv8Gr1k5Su29vVTbdauPHgbhePivpumgfjk",
  "key33": "3GzSvWxw2xuQ1rs8YD7iE1hKfzktkVkBnaiMTowbQcTYTMEKChe44txMPFRzFzw1qVwmdsaoGj5z7L5i21WgUGuF",
  "key34": "5viKwvzAfHLMTT6HSXNnoTnNUQVCn4emXsZ4GDw5Lnssobej4A3vA6hJrd8RhsGwhwePp4LMJEhDe1GuDApVqZ91",
  "key35": "61nKYySm6Agj5D7tmm7bf6VGnnjCgJb3drDgccHGNTyFWaUWFF376KBg11PfmkZ5wevVLpvFaF76tURfGy8bCekg",
  "key36": "3Uk3zQgy2WFnm2mTAjeM29efZ9yfVhBWc5Pp9sCv7f9y2H5dA5tsztF9p6Vu4sWYvAgJFeJVpRe9Ev7MeHujSiE2",
  "key37": "2e8dvZsMgRrvxAfbycdNg72thNRdkTNfUssVTGm9sW6vJAvKewEyqb7SMtzgaHS7ZkA5E8QuwP48XKn4QNStLBaz",
  "key38": "3xWXR3dJkLhz9ce99tGdgBgoEB9Y74hyT7b7kxt678XRVUC268HTiuRb7fkyHiWbVmawMmWydpSwyb7XVGXdsugW",
  "key39": "3jHL6Qb4z4253Lzw3mfeWV9X2Ds4PEhSiK2GwDqQDjEyMEmxpWaBqexfjJvk5Y5MH4b7SymLNmePE4qyV7YVeToe",
  "key40": "Wu7L8AEtct3h3zTybJdm7TPNF63mD7NHDZi3cfTH2hbg4a5vfvi1aCZXuTyhfHnsfaimNW69GhsmUor2ShagBin",
  "key41": "2UNCsTxtDMZ9huARvMSA2kDphcCc7dBd6b9G64Pqqpv1XhyzCxinELJrSc8zA6xoahChg2UL318ohcuJxXjmyhe1",
  "key42": "3EqHHovkg3tV1ZtfAmqJLBCuBZH9KKf569ZsW2J4nkWJzmpkBb2sC14A3QwuUGmWWb7bf4RidDAdRZJdUtE5u2RQ",
  "key43": "2sULqLDKRD1jUfU9HcJnLQnpHXoFGVuAyUVn3Q7X7TqdvnHLtrZeH5BhmvdXZz8SKWYG7SjUH2tdiCSHZV3FLVah",
  "key44": "5w8uSzyL5HYrAzXGVkuM1ApJDNvT1onNabpMKCaJzSpLPvXDfuCXbwtoJzpypaURcJhU4BEC4Xerejnni6NvTQkm",
  "key45": "5b18cZSJkpNfs3b3AdfJeemEFouBYrxUE1ETvpz2sCT6YpeZbmKQU1Pmcj9sibcEVN88VYaqArYx378xrEwNWKQe",
  "key46": "3Mib6TvrkWWs52Vw6stoT1JbEK2cYsFiPeodCpDtTSLdSUrY2EDrf8yrSEW47amYbuEHjbwcUDHaMmdMQXKcNA4r",
  "key47": "5duvwTHeSLH5ZaZ3YnCC5eNWvqEhZ4VotLRDvRWTSRTPSjSL3YWBi66FG1k5qJcGB1L5vMFFA6SZD1m6wCq5bW1A"
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
