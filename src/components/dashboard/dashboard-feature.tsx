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
    "2ExmaHV3JK2Dzyoh7AnogRCAjsqZLLGr9vGTn3iqTKh4zYDk1JJFaNSRQ84UhLjphXMbTiCtbxdeMadxtrujcSB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkHHGQVXS3LF8W3zqp8T787YigsJDe6Q4MfutbA6dThPrYNCDNvkJfuq8XeEfd1xWcCXA84D2SjT2RMXNrF4nVR",
  "key1": "4tEMSQyKBVAynXtWcHAC7zoqSW7hb1hSJhVCEzNARkvoGUSBHWi9VQG7c1kaRsW41cccC7GeLmrcaCS8wLzGGQku",
  "key2": "2br49NtBEYsZBVg188WxsGeaYEU2yNFP9wgh4JwPx8jHTrhtZ7gF8JdoWcDFe25gX7tf2nTMirFTdAhXzY447hV9",
  "key3": "nQwbQQ7BuCMsRSS9Tz6irGSR38EAek1ukrAuJjwGGyCzM74ZQfCbRRif1vq74Cifoxf24Ek1xq6tLLkNqUE5uAd",
  "key4": "4hXydpeadEdYveMXervHEAVvH4UXfwB6R81UENoTfjkBoppZTYo3aBfY3XKMFXePpDs2dn7Rb6pjyQQWBngHMayh",
  "key5": "LMtxBtSMSAJZWK6ziR4odZtvCrj2s1dHueG5qfLybNeCuhJPuheXaWN3YHUuJCiTEveYoKTCgEfqQkRpDaV6rAL",
  "key6": "4xtWBYQMCKMY9Jx8mr82Sy4MdMq2JU7QELwnrCFRrre5M7LD6aSm1z2MehM7FVLusKK2bba2NWzapRhFSu8Z8VzK",
  "key7": "5SAGetn1Pwxu2AbjfEkt79DTfWXTkpdVQDJdPNyVayYkwvjKLte3WoNccdw8TJqPPzASjtoYEVR8o5QvLS4cgoKv",
  "key8": "3rxppskkpW9ehdUQDxvnuNKxvFiDWNrqSdKG5TGojoxEn8FMiDMy3TnZnUWHLRzWGkDaA9se1XF9kK298BXjr33Q",
  "key9": "4PFsNbVTJXjVjuhaK1rmwWVgvcwV7vs45f2zDX8pWNxRtqGp2VbAZ1DmccoxmDyZtjP1mD2zbADxx3H87HEYYwB6",
  "key10": "3fdmAPfF5EBPvB1MoQyvkabPt5ozbBNd2XdzSkx915rybJ5q9HTykr2i51muRjuTgSS6zHfdCpq4167S7NwrLBGY",
  "key11": "fzMc7taZfkWmNA6f9pSeaRPc1Cru9JmGLu8sNWqgKKZ1BZhVkc3C6DvrVWfiCug14Cx49NwReAP2Rchd29MWt5g",
  "key12": "ZiG9znYYJ1ahAfGJMhbuBMK87oeTaSWCPAvBLE8PoXtaQwPRao8cG15AztjPW1SU35dduScXj55XQa5BhS4thES",
  "key13": "2iizYy2FGhwJdud7CzBKtSJBz5Dz75Q9HpRvx172qCdJExcciNVf7LkXuMkyzvFKsEQdazkCGFMwL4VrRzVwqYiu",
  "key14": "5NXLbiqosYn7fqVn9QYvWDnGEucmbbuqzDkZFLWeCGonJnPZ33wPeZvaoRuc33xwDQZx5qnoVfy4kRjboUoFxixG",
  "key15": "3uYERXTRouW8ogJrgXE7gHUYcfk8XoH3TZnohbARqPRiVRB9hjTrWxa6FPKTKhsaB5EFG4CaX9Xs47Q1xmVTytCC",
  "key16": "3Jx85sbqMquGEiYLYF6egb9Kp8VHXWbeVW2W4MP1Fqj7tR9neKQtnuPzgDx6dNSVQ3dd9uhkaEnxJsfL3825Ds9N",
  "key17": "45d3TAofQAqdooCqsJuyw3W2cx14BTpRbqy7nTtn4J8yTH98a73eu9ByzdgfNypofAGGVkNqqMiEbgjcrWsbAmJR",
  "key18": "5crinxBGCCUrfpWVK3QvUM1A8R2JNEszCRnQTYzW19s2oaFVh4YCWrYL8qBPXEXzbc9BdyTy2Hke4JSUVhASPGJi",
  "key19": "4wnU9ZEHua4paAF2PJoivWfBuHyhNrHSV5jVmVbPAaMxM9BT1KyFXiTpAQrpUUUjymcQtu2oJWY4GuDidZ9Hc8H5",
  "key20": "2TugsJeDMKGKMfKVqriGhjLfTAVUBeGxr9xYTKSL2gEV4CCh5ZpceZRQsQfmd4X5Pvg9ugkmfsdYMqdE3RaGdsDP",
  "key21": "4wSFcUzRuwm1mCEXEgmfSFPuois2SFYFZE6GzPCCe6KFSKh9yxjdhJdbctxttotHrC6w6PUj6cndvLMNiE4SmftL",
  "key22": "5w7S3hjPoSNegPYLYy8SKKoyYJ2am6ab2mJXPkNrpM4QWyk8JLXUEKJBgJmZqeBi4SQDwy9Se86CsK6YB2yLhcmj",
  "key23": "2NSZZyFxxGxjdzWC19ThUZ9y4ZQnsx3FDM8baMzyr8kjrL7viBS1hj1Ts5bHAgB8E4T3uinhPiptXoVuxneS1Wfy",
  "key24": "354hfixjbKn5Fo2qBF3dG4LG8uFVotg3oDLS7ar8eZVr2B3uXHacUp3a8BGyobtX1P3WXNtiuJooHvC1P3LD9TWK",
  "key25": "3HQtTA9A4MrfnZc6qTT3G16t7aCEHFCN9ourVpZDTxWA7w2cySpGaqWbCMbUq9D9iBKvaFjC6PbjANm58WiEoH95"
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
