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
    "3RL7dpbdXwH3nNbZdD5JN7HYFLWHvmRKuRdTBZ7r1t6Dokz8jDuHRuXdWPLkvutkKygQ3D8Csp5BBhGdfCGz9JRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KG1S7aHW2tFSyiUsKvVAwqcQ7UZMCiSQx4YK3Mt8547D4NhDPQe1jHF8MpZhWyJsJ4VujkC4Fh3NzijytA3vfhd",
  "key1": "4d2dJC99zWDsvhwhnJo8vPSgsdzK8cUNKFsqsui9Tb9n8UU7p8ou9oC5RqLkW3vMuBCVxL3MxLSaWHpRgW46VHTB",
  "key2": "6Xh1HnmsgXEnNCoiBWNTViDhDygUsHUQj78rGdZYAzfrstpWCcV6FdeNL2umg9sf8CpJcc69Q8u8joAoSmo2tEZ",
  "key3": "5BHSVxXzdoPetDk2VqrNxRmr1yRgw5caqPm4YwsqY13pwCLFBWzxSPGTb8oTjA356Nr4EKvNoxZP1f1CepE8Utc1",
  "key4": "5VzPiAakR9LfVJmbSvgW3Qq3ZhzTZKyRD9bknh63zZvqDTnHdxAwpgmWyHiFvjbHdxtEv6bZeaXjZhAJiMtkUmD7",
  "key5": "x6Wgcb6n8Z14oJToBLGDv4oJJ8PxEcbKbSeSgtgUAH9c9XQr3A5x6hVFUKq16mGKsjiAEAEGwhrhe5pqLgjySnW",
  "key6": "2vyTzhKiPZv4vvqDXsS4TBxySdLTv9Vpgy5r5ZSgXz2EBwhaFvy6eG7WUJ69iHrCvfFXuPpg3vbpdLtfyZYAu9Ae",
  "key7": "2pUKMxqHLC8PoTbqcXLMUo3b8YcHspw9uW1Aqdv5T7wdALxtt1cUNVZZhsyoLMFnjMYCp8wMdUWLdP3iRdhmQLxD",
  "key8": "5ThgmJFUERR516qocYVJz7NTXdoS1eAuiEywwBDXs7JhHJUC5gHAxW6gDPpBJFVoAh1uq6TW2fXLz4tqXKDQfBgC",
  "key9": "5hHCXg4LmXWg6sRaRi93BrXhNDPGBkpvweA7wQj8vXsj6yxbouKJXh9aHnSbTqwtm5pfQ4vzcqMwEH2RxBUNwnR4",
  "key10": "5YPgPqvmY9WYezo4ELDorTYTci93VRqHvcKAGC9dU4Lap44G5swp3A4mp5NWFPQX7XNVmFeFDLthH9SEQvWWHek5",
  "key11": "4S5VhTiBX8VifA8EzFui2JxTLLmXph3msaNshk766fNTLujA84GVMs5b2YEwGyvTJL63raJBoskJsxJRQKw5jzzB",
  "key12": "25ABhdYtAP3begCg6UDduyexFbrDiwaDTWQ7cSfNCA9LAph7syRHYkDVfBMQEG8BKKTuunbFK19BPLGaFZ8GwWKj",
  "key13": "31tZN249h5pTVuE9AhxEVXaxe2vf6tzu5TrmNUL9VKwLrHiCxC5ZZ5dyfRJDLgYeXR82EryCCsEDRvqsyGBaUtmg",
  "key14": "3xQgSmUwt6Fz1n7RsozA1xD2xsTFPwojpqJQbK5fy3tQ2HzobJcVtQ4Ajop1WXEaZsZ32unjPWWAp2EUw9TwFejE",
  "key15": "3Zh7t74QsL2SbGQJbm8DiYCAudBQMCn1kJwVZsLRtKGDYx5VwN8AAuQmEJCc6ep8m6kwgkU7Ss3EgSH734KHxtmK",
  "key16": "4Hr1aUQmryXCUQNUcFPLYyu3x5wxBtK8W8jsvQJMq9NjJsJ5EqbCpxfQ8wCxrjgPBWC1Y79Aw5KYMTJdUkV3FCnA",
  "key17": "2wL4RE9QiRMCTsHKbWF5hn7u9oq3vevwQAqkJFFqwNVnGeVBQAZQgPAZHFXF1i3q3gepA4g2oExGSnWwCSictzpX",
  "key18": "7xdA6bToyizbCCG3qfa1jpbBrCWtJkRcUWJmtT1fXNDmVrC795afiYZScTxbssZQ1FTiaH1Uy728fYRHcizterJ",
  "key19": "3qpo6kdcQnNKcuXYpsrXmWPQxes8nXT6qJFJfkNCg5BpTYipnfSoErwBadFgoi25KYaHwKRnoeG7DFG35CG5KMcB",
  "key20": "2iPrSnh3Z6ghj3FGEoYGeYW3NHycEzLTkGj3qTam1UgATgR1qcpam93GDMgsj8RuECSQmos5zuJtf6k4jfZktwsZ",
  "key21": "5em9xBzp8NMxehgo5ApPkdQUrTPLi2S9rDo2DbRH1SFLFEXEP82AkWCYBokXWSigh15jy12oGU2y7SDuSd9tadrN",
  "key22": "4HSbhWvUpFmwjzpovRazxWXHTJAoauzz2VuMBpUZ3dScCduN2hQ2TGoujMH3AdJWHLbgzKexuXy4cEfwZkCZRCM4",
  "key23": "2eK4dsLf34FdebJzDFbwXUVFe53fHQi7xZqt76VwgJwbAtcHvT4SHkk35B6d3JkpqHDQRJSFYCHVnMwfiT8d8xCN",
  "key24": "3pDiFAQDYhQXVoUBmKpndxVLotfErjNUVgfeGaxerFJCjrpXaK2Qm55Gaipdi2WGnqebuyYr6vxqy4jx5SeSDpiV"
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
