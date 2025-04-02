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
    "2oc4rrGRyj9T95PLrZEYar5FE38C2z9mM3LLCLji9H2rJFuGv5GHj7kynKGrJ4h1xNwoHLjN36TN7kvvwGLLnDps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKmrG5DgZ6cpfZyS25vqJDMxQqnB1fYAGiZH11kfYkorfdB4Dv7ffCuZf9TG8CikRdVMjFiweCMh3XEEKPXAp4u",
  "key1": "4ghzCF1WCRgz1TfZyDkNUhrbi7H9qxww7FNCe5wPr4LR5X7ZnjPsSfiePNbRcPVeymZy2NitdPb6GwuD4bZmXXsS",
  "key2": "2cyeQKffNFyAmMFsCuj9uauWSgq6GMFHR6Xc6cxXJ9LmdmvhHDdKu3KLHVaeaAMFEU1VQiATUzfSDJrs6r2KPWr2",
  "key3": "2MgmPGSWBqg5GbGFcXPHvDgGd7wtenvvTCBfpw5EwaVgumBVvgYN5XV7yodijTbYc9nDkKMaGcDXp7zZU95C1uRi",
  "key4": "3SUV36UsjsXXasodXUqRwhtCWagXF62fnzsfg5JL3Civ646yYCbzUQHB1NQNWLXG8At8zZYyib6JYENfmgTHzAMB",
  "key5": "4cuES6vRiSzg1xzsDDuQ3VoLn4CDky42pXW5yYbbANEywjrsXB32Zu24t3P3ErXZ4NTfMNn5JJUobeKVuA4nYdKo",
  "key6": "4wZTtPj5RuiyPXaugaULW3NVRBdAFmBJR53CtUr7ZuxoqyfmQYtZmia8UCRfN6SLQMwnwN5pJpK9s1nyqHAxbhQ1",
  "key7": "3zZrKUHFz3Zy4eTJcfvYohPdVdppfszRyxbRuz1yqkMi855QCDYcUY2vu4KKzednsPv2HdSdK1JgtNQyVREsgsKz",
  "key8": "3YSQndZk8rfxcmL1kCCZBqkqCMqd4v8tXt3bnAzCGQgUgSz2YxJ3jpZ8WUijWXmgV3eqNwVaCMiZ1hMdWGNXQJVe",
  "key9": "4E3fNxpDDr3XzDSJHC3VSUrPbkhyNaXawxTrJRSkaQhHqXrpeMFCU2q41Fm67kdkP7cvpEzc3cXy6at728NvERba",
  "key10": "BWuqcKpLTKYLcjMi7EjaCRyLgTUfzgBGF24ZdiXsGB8tPDtomAKixPqa1qC6RCi7GSYYGD2df5gBvjojRaKpHqV",
  "key11": "3NHsjwG75aXHf6tnsS64iCnDxzn53u6G2DSKmCuf16DQfiAdacbtjHHrmSx9ejxJDyPoJLmLq3Jde3GoGNFHWam3",
  "key12": "4kXLgPCSj4WGGxgn7drEafYk2ZmWkV5sNouh4Bx6jMZL5U9tnsBFns4whTujDkyygxGLUw1CRam1V7F6tenZLRUF",
  "key13": "Ag37urkCFkwoeY6fHp2bPPWZN8Wfnp3Rcir2nYBDABfuHXNhPkyZzVvRG2AcPX7RpaoaSq8FB7bP87fnrza1RgQ",
  "key14": "4CaNKwKh6cpAfKPrMqqX9wYbnvwXo5trnNQdxw5HVyQVfsZo3SEx7z9HcUn9hSeCbgJAGEYcyjzxC7QqL7YRnkfV",
  "key15": "4uoF4KL7CqU96PfAowLt2icCHh1E4qv5JZUHwrtprEqCLjwxiueN2im74kiiiKWCfAvGEawste5LHTEcP734vZGk",
  "key16": "Lk5aERafqhg6jkm1LErgsgUoz1vNhyokCsGo7NLP1tkpLw39obwovV3UXXhdfqBWpUDuTkxH7UqRGYy56Sqidh8",
  "key17": "4bzgdPf7RCi2McqZdxNXsYCBo4QPszQVJDyhvRB9a76ysqKZ6qvZhnsXEC1gy2ozhWpqFgyk2UXKRPpjey7LpidB",
  "key18": "2fWAKPPf4F53uS8jZpjsfJdQKX9oZZV9dVPyApFGbwbUAvxoxGVASaHTVfXZMP28JeRCKaMQhgqirRsqLqKF4rCS",
  "key19": "3WLkvYckrvuhvzyhdRzU8tuMaGUFrDAKrjnjCPrXhnbjKUp8pbFYjWH7qo7roPoopeXhGDyQnANB6pAXraU5vPhg",
  "key20": "2TAboEGAXUtRTqVhdM41jDe9u1TNKW1P8s9pWiymVvUne3FjNqJUcCU9tKyxQuz13EpZLC5y5kcsci21ar1yqSUS",
  "key21": "73dqPbL3qXNe2ZDYCChTGKnMVJnAZNKowTTDgxcGA4U4qXpEsBnZ4LvX64NsGjtCc3P8A9iZbFSHzGvLNcfN5Z7",
  "key22": "5yAJqMPm4y43YpnrbStYXxhND4dzEmcxbeujzojWQv7CjxCaiLKKLTaQn2WJpKXwwQ1aWQUnRXiuKs7SiH26zH3s",
  "key23": "3qYkabanBsiW5VYRbCraZH4Ek1YGkV3X6tpC6HijXxZB9FVkBCfhTLDhcrfkbDgkkooZ8aUduQqNmvwASzKy2gLR",
  "key24": "36rVkRcaMETfGiR5cMUMtWBbyUxaTPhTaJP4738gWdThveFB6jWVpHhawX3z1sMWTTKSNvqG56hRLMmWfFNSNNyn",
  "key25": "2FVSDimwq2ZHF36oPPhHmVsGejyMHKgS75Vi1hFNCTJ2rJQ4Wcg4Mm7c6do9hdvB5YFiaxxeVHu3SFXEuPq7Nujy",
  "key26": "3BAQstPkMp3js2MrofjiA3eFnfXP3GhjVDyCgXxNLk1zPEjPrkcsSa36EDX8aFJVuymF3CvM3z7L7SdUWkNTXCTq",
  "key27": "3GNMAT6kKnq4GCzC8WsEsh72smXrEmeXcpVimigqYYFnVbkN1iUq9GrASiouVBj75xKNZaApee45po811uFkSeLi",
  "key28": "Pb72iR2EbEdXS5H12sFBgFgbg2FbNFo8FEuDbv9LhjcrmzQPpvH2MHPGXbHj9gqC9UBKWDQ3bx43hpYctGiFbhe",
  "key29": "3RHCaiZWE8Z8X1hBhmGQP2MwX3vjZMFn4RfvpZ3u72phXY6WbyhW9HCN8pXhikYnuoKbtjdh95pU3cJnbQMHrbKg"
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
