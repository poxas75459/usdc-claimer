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
    "LFkLEHYwHYbUAi6guDwZPivEh6JcaxXdE2JuKUEWUJsT8iLff8UG84Aqj2rmmeLRgBihWVtk6M1Qoxvbe9iPVeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TDP19fxQt9V5hNCVLZLUunZtFxPqFuofp4cNR9uqoaW9Fb2isFFHfQPuKT2t9WyZDDdZgFRHb1znWkcc44KJdK",
  "key1": "5ZR9SCYhpy4g4q7B5Qjx4uMtdBcLpGmSzjrz2WzdbGDmDXbXD3X4MX83bio8JqTyzxyrFaUace6fT2wcaMUCbWAB",
  "key2": "52r8DYDqiuXQa4Bxf9dRg9GUL2Zz1bEU6h6gHaeecdGfF6qz3dmAoh5dVD6cmhSfMsU4Nf26MtcGcuRCyy2Xa8ii",
  "key3": "5noQGsAK4RiNgyJqh7SBAwVrPBo2SEfWamm9Qd526RrwAV26zd4ZwiAR2uY4JviSyn9HfN6k1SdCcH1qEn91grtV",
  "key4": "4gLFZqZ6D8wBTB3RqyAW23qMLWDHkmnPChz3WurvSAQysNwybaF1wRhGSjedWbZgY7fGfTbspRgtBWoGcCHxLiSG",
  "key5": "3vXjZBcR63pEG3Mhc6NeGoDqdtvfE2UqkV1JQi2seiyp8muG1nj7gGKMLtdEQ6RtCtsoJsUgVi1HNi6TzYD5XZ62",
  "key6": "8WwxaZVZ21BBHHPHJUDjFBmFQMbuQ1bkMoS72Jumxk7AQD3NNkGJpt55ZDrn4ngEu85T1imB3aiGgCsP7gYrPuv",
  "key7": "4xWAWbhdpuPRbXzwtMLSkcgimLNuQFwPYhHJ27jwqT2Ti6QARygczUidfuS6WRNzb5BSRp9XPsmX2raJ4fVGJzhM",
  "key8": "Vym1Gw6mpKDZ2QuxQMZco2LoYcWDDCpf5AYoBvDJ6AFnNTdHSwcui4VGvtuqedzYbstu4PL4PbhB5FWfC4tYQUG",
  "key9": "5kqG15bEdfGC1Rh3RzbBjiZU4sgmQ8AcdiXznxQg37fbVs3etjhmcBKw2oc6Uz3D6eER1z6kt1dzfqshiEDpVGii",
  "key10": "3Qdje6HWokVGAn4kTfH9ZD7srRPmTEM94amUpH1GDM6vSUbthngMVT3e9jHtRfqitEtreG61z6eghGthJDGRgxGz",
  "key11": "37oo7NB5iLRL15fMwRHgJ72XrirxScgXqSdQBQNTbhcpxLJikKghwxrk1p7hE5SyUs1E4zBabic4SCQoVJ4ZaCjv",
  "key12": "3efK4yDkabk85RcBnuYup5oMu4HbovvohTmbjDjnNWfTBPRNGT8DvvGSxA33M7DpprcZNcF7qQNrYU6dbeW9MnnY",
  "key13": "vtwq8wkLyQqkJGkPaMNyM7n3XZoFZjBLFSGqwFPUbEPJ422jRxGdMu892LmLHc8ZPRrJ2Wyk2ELjg6G7LguoFyn",
  "key14": "5apqUBzUF48NG5vQerwfnb7KHFReXfe7HsEFTW8AHLUZ1Kn5BRJPJp1mCZfQDLoLhGWoEi37ZBQiS99mjNyh9FYE",
  "key15": "66SyStRmFvmuaLzZ5FSpfe9a3T6itGxXRSZad171378iepYD4Hdou9wGSe6FZhHad6T4PjMTgxnAeCzrUXNoTbV9",
  "key16": "4QDUqj3SDsbDTkzLkKnCruxPUcH6LaVVZkt5Y5fk4LRDiq4fvPhQSD1WFjBamibrnhq8cpekCSKUZNrhFHeuVoby",
  "key17": "2Vk7YqnVHrRowC8LdBwFX9YDKKHkZugHGU6ijzirhYsPYcqptpChgsjygL8xaqyFRVYMnKbq58p2bFD6RFvQyArG",
  "key18": "23rHYbxMiRcwqJiGDsgBsVe7WxxEcXKNCk9YeEeMgFyyHF5rn5gwvLH2Map8esWDvzGQFesdasC3rBpqgrAYGpfo",
  "key19": "2ieED5MnNTWE9rsBSMzRmJJ8Lxb8LypiwD41Quq6sz3AVYF6K1XdnrtTqaGhaejvyS2Cj3TUG9ugZJYeJ5VeAABz",
  "key20": "46abAJjxv3ZvXMw3kCEtypks4NPTWoBF4Q5MRjHtVFKnWgJhoc3xYxw7fdLpH48BYr3eCpSH6ac2HY9XyQyAgQ7m",
  "key21": "33ub3WLH28TvvSRr5YJUxA91pvLb7iJxYoifvJjSSvdy2WwDBepsDmjPzvd2cAK5qwVmkuR2deweVSbfhTYcddKh",
  "key22": "3sHJ56CbbBJEqzPXAR7GdXLYp7NoEBwkKNZ4ZGBhKanJvWRN3P62mdQvZSZdhTkXVCuXFP1RYUhh3tCLQryzWdtH",
  "key23": "5oNMK68Bk5DRcFkHRrsZXaJoxHTGcoPwP6PhQpubFSJNMSz93puExyh1gkJxuUKNE2gZuwdChFqqeBvaiFt2PweF",
  "key24": "iANfoALutBc8ssVWuJyJZziu9RsCV6Q9ePxZZ9zHut2VjBhtV11qYH3kSRfsjxvHe4ar8mdUUEmECRqhZaibdy3"
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
