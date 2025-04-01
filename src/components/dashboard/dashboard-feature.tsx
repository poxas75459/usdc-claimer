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
    "4NX97ap7CSyXG4CmsuJVF4CHeomGxpFBfbiv871rZ8y5WGyUJQq1pLUse3f6o5sBA1sJkKxVrzVMLsTjvnQTZ4Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BMLjDQjpMkxqbP9TcxPqoBF2onA9GmPFZ7f4xmsCPs4SFv7W8H7zGvjTrSEGcG2XGTKSbgKt8sdK7VoXkwf8JE4",
  "key1": "3L5oNsNUkmintugXR6LKxGcuuqkXWNF7pEjW8b5w4b3JCQM2xC22mt5SecoFtsw5G2eT41YZeUwGRtFQiHXhMkDx",
  "key2": "3s1RccULdQzm6SkSfPuNETzRC7C5Kvu4wwxFKaKg8oHRks3yXqujGRma1HrwC1XreN5WzqoojKZPTYa4vTMswVKf",
  "key3": "5qhqwxdrwLr4ZAcDHHvZZkdCpR4QwMKBjAQs5uGsuMZuVoH2uTxcdRBzWWEGzMhdcSEG4LeYEzeP1GgJwikHYh9q",
  "key4": "5ztkbqZGdDrPnFPupzY75NW6nDFV7FNNGPQnsFghBBr4wj2Agre9cZsWy8Bci6TZv8QHkVkm29pT2X43c7yAowPk",
  "key5": "4huPUfrTizchtsQr1RnHWBZUC5cZa2j6HsaftJ5BHVv493JyjupHRaKWcztad7yMSnXBRHtbkjdCdVhBRaP9oMQu",
  "key6": "3gscwsAeJBEfEjXP1Weh6kUm4pDDbc2NZ7YN9WoU622LqUX5jHgvQcdy6AxygXdepJSza3vQovuDwSwNzx1UDWAD",
  "key7": "4QZKGEAtHLXYTALeXfv2EK5L8Kuq8dPpXmLqcBnG85rhyUMnVy5wiYWJdKHpo9YjkidnTbhsaMoyDE6sNgFCD3Qg",
  "key8": "BxrbEKN1mDaxxFTNZvEBBhhDV1xresxmnKwDeSSxUQYHMBmWbs8p4nWghuQtbv9MyM1MTBnV3q3XuydA1VaJout",
  "key9": "4n32cef3bjWjiBPanfQEvEVRHF3kwtMBcjiNE56VgzTJ28BNaRwitFoqD9kTQ7sKq4nrF3zBDFV7U4TtEgfBvMiC",
  "key10": "2pmwgDmw7iJmPr53vUrJWpQhZmc5XXvaMAPnkMJanLxj7S8ZvSZJnSpWwWafYo9bgSsjnpSfUTVcKy9KNC9E6GpM",
  "key11": "3v5gsRo1ZgLMyV9pLKfffh1uygdtWh4QokyJ3SjATZQURART4Gb4m27bgNLsev1BRMgYwsFMuyuosuzc89Bf68TE",
  "key12": "4g4gY96mNH64axtBGk6Nqt22Fi8vJWQsyFiq8XmrpUb3dGojL67NdssM7br7ihz778CKUaNnuYrj6J7jQTnDoxcz",
  "key13": "3dzNoN5yhZBfHc4NVupL4Vq7tyGuSe53yX1wa5udSK4gDsS1YKrKLKNbgpTyGDPBrpPGNBdVWLceyMdAK7A5DZ7e",
  "key14": "26uUgWEuax4cpmZtqergcPSNEf2Tn7p4bT4QLprkaV3RTaj6bxwmJJBVBsPFX2exdtuckwhgKUuTHicPhvXEdZCU",
  "key15": "utVqLfHPM1bDNU4VeW9f4SXR1BZZJKGQhLsy5i3N71dU6oVcfQGoFFK9CTsTCAEonKoF9mqKQk9vWfhBTVHq67x",
  "key16": "3XQMkmoDdasnqgZJDXQQwFWswtTXEj3KSQEDtL75cuyEBmQukAFP2JW9TuudwGk9fpAygWLkd8kjAcnN5vdtqjjy",
  "key17": "2UMXrYZBVfLz147nsXbD9XDT8RhJYGe2tVnQUSyEaf3oWj1pcKWeGmsDYPJ7CdvfwHeeC6nx8h3UYcAstidE2BX7",
  "key18": "PucRvMzTrSEjPkePEeyaBjADwQi1JRoTHdBSWAqWdZJXAsYaTzT1jWHaQAfeojyEnv3CGF9SVTqtYNxxfz66W14",
  "key19": "B8iYU7ww7FEfs27j7rv4sLL98Lj1zqnnpLajcsLhWtcvrYczWurGSmzBUHWwagskUioDhXDJh6naXdrhH47qz7p",
  "key20": "2G4RQsTfrvSrgEJU1YV7ecktvqt8M24ynvKd9rqBMTQU49rUKpKfnsqDA19tTwe2vBADAKzhBVXvriUKGe5fKeqD",
  "key21": "4dSgXoibB2KxYAynqhwF2J9KFjtYPAXiEFJHKphoPUNGTCwa7FYNNtNH1DJzNAUBYG6TgnD3Fctwvdknmytivm1V",
  "key22": "4uQajk82uyiUJCGYaFTbrBX8q4WeAvWHTc4jrgTYxnqYzbhZEykg2UCDqoykBrs9iwS7NmcEoTb7KCScuU1JXn7s",
  "key23": "vPyEZXw51NzWQW7BS2wfAPaaSPjtY4aKUFZNQYxpvMNuxre9hmRxvxTFynpPVLzDQmejRkySxBSqBPnmMycNCs4",
  "key24": "21q6S7jNmgomsirYVC26w5keLUKuF2LPVcGEPP1peVyYGfTsiyiCZax7R47zDUPV8rmhwKgYePtbTW2QyWpLAYUf",
  "key25": "NufXtHpicncmNtJ5NMBbiwGtrtE1Z6Xz2Mmd75cL7FtKPxq1HwKyjUN9vEzeP51cyfz4JvLuL8VAqM7A333CVBf",
  "key26": "5SgozfcQhKaxJuMNFs5zi1bGbsDkUpixo6GXJYPQAbWpJcXseMEQeXapYogcckUSaHBhSiRWByMabNMoNRUMUtBt",
  "key27": "3DaZwoCDmRfnAy2boxQKA6iycTmAjmz6BWf56rdQR9Zrqe3iS9xTb3evrK9wLRDp7f7XNBhrCEhJEJFY4QPiwLGj",
  "key28": "5Stht2Utgc7eA5h6mw82xSS2DuitxKWFjKfhoCoXtPoAWwqVoQ5VEWiD4FcCZGrJ7CLNKFjECrvRMYih68SLGSVo",
  "key29": "5NXeug2wHneiNEqXq3Gd1kHZXtagWh4Kip5nF9xutaTkmUhrpHSa7xqtLj8TU86LupR3xYojidPAsDEuC4P5iKna",
  "key30": "TBtzHwhHJVRoTYssE23o7fe9SZDK1csAoCV36wofjGDQVAogFuqURyYYZSEnGRgUz88XswZQrcXqwBj2VmX5v39",
  "key31": "2xXbek54je5VcwZy8qbfLps6MtoQjH9STA1wXnHGdvnb8T1cj5EQVjcV1vyKSEqdrak1JmELHQsNHCh7cPRb2fPE",
  "key32": "jjReUyy8pkghTrotMXcaqp9msbaDV4RyVD52Jo6hAciRzysv6dpwozGFWduGj1WYMSYEsMCvRaX3npVKtjoQAXm",
  "key33": "121j7HmRaA3t5Qt29iZsNsuRc9HFbmp6D81NnVig4AivWxXNxizq6UGAxBTuEfYVoVU6HbT2yv98B7UXWBadvRex",
  "key34": "5LA5JyXNUZ4Ms5MQ7Jf7pBVRo5S8rFdp7JtUvdG3yttB4PBZx6FeZkTzwjsBADW4Qr155jzTPpincaMaGYj8o4Nt",
  "key35": "2Wd8p7Nr8U3qp7uZAGtdvPQWz6pQiNfBSK38e12a4i82oo7YdbLp3VvQDW6oSJwqtgNpVpZC8beVfxQMoeHyxUSx",
  "key36": "2pc79DCb3vuJQHPK9E1D6zvmGBQmPkgzGXvLAXD4sYG186eSEr9V56P1HjLoDVLFKSfJ459zRGVUxQmKzts9NyJC"
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
