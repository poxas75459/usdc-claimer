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
    "2ZAms5gfzbrz4XK4f3fTJTn7pBZK1EiJ6wiojeXJGCZb76pNeGocXk1CFBAzCpUdFaxDkwtdG8AmibRDwx7FE6TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAjnNF9Gwk4jPP3LJ8jvRFpCZKVcCPtnJ2K2eEhZuKXMqMGCDm1hftAG8sSzxfskTHfhjWbiHHhf4LQVvyrLNFP",
  "key1": "2JbV5eEnjTBuZ8Vk3CKn7GbFwH6yBLc2UEWv19CjQeuGgGzhWdvHJhG6jrZqEoE3qowwtgtp3UqMNDCFSSyKVwfd",
  "key2": "2VRHbR2LtU2fHHGfsqzSWwqEJLCdcx18k8HLSqV5GVSxxc8a3Ybc1TtJ36PhQckpbVftVNumtfCWzQRBr1MsfGfX",
  "key3": "2ootYnYNchdU92uByHzmiPtFNp5xqAiVZa4CMozGWMf7WtDjvYa7QXnU4ygrZHq8LCwPW9UFLQaNKCVCWZAyWfvs",
  "key4": "5Cf2bAsGfahAdBZ1DbDoE1QhaHNciZyvYcAfLXd1ijEDedVPoYNqZ5n1WuhTHfrPLqxECXJmzxMnGafyPj7vE1gb",
  "key5": "21iT6RnVwmcAfTgrXpbJn5D9WdAJ41sfvFQzByB9Ua3NdR1Hw8bArdZDekSjKXnA2Luog5GED1YJMSPYFRJzbFvK",
  "key6": "PTTH9eNR3MDfpP6C2qBWDPKjcC6tsrDPv4zbRj8b3edS81DkW1r1P9Z2Gz3nLSJRTwymq385CsE1QmsRU13gisd",
  "key7": "2z88MYdaEB3LfAEyYng95WTGPhcnuqMWCpvWMDd9tQtzuNFn5RumuhXgdMHbPGYy3tRsW3AJsDydjvAicdZe78Jn",
  "key8": "42PpzuSraaXjtZRRoRsm8Yq1WZrotvMJtNghSdHC6waWXEm3yYB5AxN1yHSMMkNgRabinscbriTM6RTrXYGE9Cfj",
  "key9": "5ZNeUWDBz5vDFxBYMkLWYgo21R8b7FWvRFfoDwSfXU5X3RZhKE3KHeYa6XUzfTkAsuMMq66XRhXVgdaYngTXpW7r",
  "key10": "2bTZcQMBKCcUiLGq1aENmzPQPXAiQPS8X7HYMBDmnKPdQfH1vPUmoeUHAZarW68gLA6Wz2P8QNfXYTeomybXVAu2",
  "key11": "5gpmwTDux7LiGvmrvgDFbprV39mYzEBFP2v4aiquBKcWLSzBpTJukXsdk2zDXE4Tr6xrrk4qU3M25Lf49cC7uiDx",
  "key12": "54DV85Yhh6NxVMvHkRZrHkChQvt7HMgTK51cMcNutv7xx9caCd4N24zTgC13f2HFF94SL3dNCRWDVFEVtQrXtbjv",
  "key13": "5xEcSx3v2cSvVXUTZrKmhaSAbEdNYUZzGEc45kiJuHvwxZTfmEB71nJDPStLYePmUbAYWtsnzxSPMHQF3cQhHXkS",
  "key14": "5yonUup88J14YGuNb2bLbPMHQP46Lqx8pf4oQ6nm5dukR8Wkppa2Gf8u5RxnLTioyirAUYgLxrmxe2CABN86J58K",
  "key15": "59LPh9RyFasjsrFmT8MN3gaXsgtW4LFTvQzFHaqcxCaLA3ZrLAVT9trdBRSmk64DWuAgAHckrD7extG6UjP9PpU4",
  "key16": "3DyEBXTjhLEkmgeezXddLFz9JLUUEC3NtokHMrqogLm7VkQRJfzNj9KySjXtzJ4Z8pwgd2PpV2J1PvqmBvfNXLtr",
  "key17": "5EcLDdjSAvwqr4xheAbc9K6Vua5gFP8deQH1UVfT2SdLTo7grv4jeB5Y5HxruUYaCWUCKs7nZ84rWXaT3tognyve",
  "key18": "hU2dTLBa3rzdPBAxuwTP5PtFwYDdcv2kNxGaGZ7brKjLrAQXFd9DbUo9STji2qwha4gpUmXMog9gGNFdtdqTcC4",
  "key19": "4NWmCgXfNdUks9WVSKctUwfoze1mAtFLA1EoDUp6CdrZ648xiHWd7KjPaj5RtyCZ4fJvfezStvAYiQZD5CNBmEBz",
  "key20": "2VZ6kTddrmB3XAnUTYhx2MgsxrmjkdDjMWCHXvVLHxhKerAcnpf4nKUxsGr9tXZEbakMDENww8nxZctfxDS5Eer4",
  "key21": "4MLCYi268U9ekQ3QXZpCj7XJtSpL72kmiMUqzXZbDW41a1KRrZSrjY3BdTK3iBPpHB38v3beAvN4EPCgXpGQWNbU",
  "key22": "AtTuNPr5NN7v7FAvctstLJN9Dw6wpQL9Zuf7iYaXAojTut61UbFRw73AVxwo9qQZwXVFrxamzoA3L1pLh9xvjka",
  "key23": "26vBveuxsEGDdTRU1tMmF7jTbPepMQ2a1W94vDKZt6TL4yTcF6C9ZPJUrDvb57BJd2PfBvvixZRUBsc7dB16EsaX",
  "key24": "3zhbZtQrxsXndEwpiTxYbwWg1XNXVTeHi7UHu38GL9PaqxL68NbK5xXcN1Sdm7ugPnWiZzTaZcAWJoQpijpE1EwA",
  "key25": "4JxNg6djn4EETWm8Z6uA1nEZSRLprr9JjAC33JqECQtu3mJQk5hseD7kMWzX5M2Fv31Gt19cNashYPkDfhMD3TkZ",
  "key26": "3tNU1NsVqERdLEvSzrhAR5wXywrpvLPNBPxevAeUgquGpJHUynWtcceQRBiKX3SUUYSyCgADdyswwdUn3Ef632Ur",
  "key27": "5jk4FT3T7QfV2wHcVxvNQnnqmZkMSApeWkhqq2ra3DpAk4jYAiqh4crLWMEFAgfLb33wff6W7URoxVH417gRiK2G",
  "key28": "3A95AfbUi6adtfUYCd5fuCi27xXu4T1CFVMhLumEfbMYr64HJYVUndrKn72eDaUGdx91KTFqB1rRM6tSkexRiTYf",
  "key29": "239VVawNJy9dHJS1YA3dVoQyDrzJ99qsGNRbkiRNAhdfE4vA8KPcMaTWtw86Ae1TwSBcrgkrCifntHSkPE9KChTc",
  "key30": "4wZmRLVtEtuVxftNJr9nyZgrjztoWi6AwrNTcF3gt5UPFreptdGWas3akupUvS5gS9rYpqCpAPyWD29Tdrxz3tjA",
  "key31": "5ScW9UDVrFgyMEahdRLRp8FF4MvL4QwSMcBZDUxTogABxeMiWeyhLhPNkABtTZ8y4mMJb99VGMjtgkqbwYBcRAEk",
  "key32": "4UEUboNr8v7WV1dVCMbste2pgrymGX4MYvZJ2jKeogBv9eDofQAoWyNDkvapse4rigjETyksGrgQ6xVT34MVCJZj",
  "key33": "3yH8B2hZTA5FXqWdqXjXEhegjpx3jGA53GYv8QAzCgbf4bmscDwz7FAeqKyNYKuYTueffwuPSyYPbkAfdjMaYaQs",
  "key34": "ftTTf2tQjz2fYLe3d1JrS7Ye7YEGaQuK3fgn7Zp1TkqP2LoUyoPrxjArSkpBcYKVP84dmtLpLMTG7FKx8QtDLeQ"
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
