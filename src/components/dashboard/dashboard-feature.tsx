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
    "36u5RZLWapeWGid7LDuvXATFXpexND1aq5VTit1n2QoPY6fJ82tw1zAPKTsJCnXRuSn1LhzDbgsVPm1q2xFbbDey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGvYyD8zzKRPb3jkhUvbciqxYpSu9nXStmhM2in1cZJcCmYJPdq3mB85JCXk5yY5nrDu1NNGW3ZrVTYNL6P7qw7",
  "key1": "3PJqvc2QwVMD3tprcQx6YhZ8hU3vUeTXEBb1zw1mjyugRYTHz2PyVeDwmndQ1GPDL7roAbZRCR5yrC4GSZvCLTbi",
  "key2": "3LwJS2EEjuSWJmnhdASrAahconwSNTrLcCx7fm2iNdDAcgnrqucjbNynh5MNrxqNZhJUqNp2Af4pSat35P5nwoqY",
  "key3": "5f1QwdVS1a84iH3vXEmdU1hVefDL4UhrQTvbGQukGvQaFa4RXeX7nXBKVKDtNKGYzNhTpxLUZUgpr4E7Ar22eYRM",
  "key4": "BNpBCuuBj5wqhbhcHjrbzMKppBavtdCCydJbNZSLB3iVGkPpknc4YJdywbK8N2C3PiKGf1AEFkE9HQGRT18cazM",
  "key5": "2VddMwCtVqGkxos8JmxRvaJRePkiRE9wKFLp2h5aPbfsHPDzGos7cbGyi1XNAkmLvFESYrFPSgRVuh8YdbAkTXyh",
  "key6": "2SknXswfqQzPS2baWDabb6LHxQ4ps4u7FUJez6jPbr4Hm2kCuyVTUewpozMAExXUx4uSSNnKdMwQ4Lyf4jSZxeH9",
  "key7": "5Le8ZKzSvme5qWXt6ehq2gcTcrdwa16Fj81uiEGLDgiwxcUJtnTV29YDF6oQg6vrwJFhWPvkKdeoq4BswTfWQdrc",
  "key8": "zAZhAxpe7pAjiMo9YR9AcJZU6FpEkxD94CjTwMf5fGSWjCuamYRVTmL6KyXsyrMbJ8DEvEK3K3cg92QVQ19ziFr",
  "key9": "2KGeUWn1jtpBVSPnwnyXpks63jfPG1ohum5TomfHGthpKKuXgGWTB3kwxcBi6JURvcBARQHtFALcyaphETMCJZ3i",
  "key10": "2HGSukv6yfZWzWT9Xs5k7bsnvABwjTBq6zHAQaBMiMETBZzm8u7HRGW9TzMB55Kmhsgn8yQYycyMis3buxuc1tTG",
  "key11": "4fjtpAAgVgxxHrHfA3J3aKpstrSoaPG4QK6bVpMHtcd9opfcszyRpjGhtPxk3gijScBHj38E4WftQSsxh2jbqUze",
  "key12": "251FJmW5i2hcxpXZLwXNGjRZmb3wBfQqToakRK4Ka5KENTdsWZrZr7doHQzD2BjgDjZUt6WRm8f3D36iAW581tWE",
  "key13": "4aPF6fxF7Vh5sxJZLM4T66YNX8dMB6sJvYsYofx1C5W868HzL7yVnr6Z8RczpRBVMeyXAx4tFB2LAFAdh2rSdpeA",
  "key14": "2FR1NDGEnAvXz5CYqpykhiwwBSq3oJFGtgKsSHgK6Km3R9N8RjjQRFq4qyiNnxWr8VJn1BSCqSXcUM1iHsXzfYCN",
  "key15": "4XeAUqaj3dPB28YN7vbNNrgKxCJ9rjk1j3VFzr2vpbuqb3rcNLe22rHdrub76ZAXeSqLTEeWCHUvkivSxRMvoS3d",
  "key16": "2v7zVck92RP7tUp3MNk7TSzGfRBQhBnhuu31UPNZSFJ8huEGFUFfKBAZwqBjFBmurGK8YjPfDdkR6Vz7fe5gm3xZ",
  "key17": "3S6S15THQgpTs69wBh5Gmd8n8YZtnJnnRcD4AogZW7SFRaAUFDLXkbyEjP2CfFDTEMPUAQsxhHj9bXYZyj8RcySY",
  "key18": "49pX5RmaTet59uFmyLSpwg3mfp8NwZnoNWBHSdgUcpnSSmoknVp1NemfH9spDcwyRSTdMfKdamXWhEbCtHRXfopF",
  "key19": "2HxDvPQrnNpoLy8caH2qtKzdYg8VGvMbXpjU8hotxFSvRZvYqCMf84WCDCJ1B8FcWCjwn82UVqsbu3CtZNhvrViH",
  "key20": "5UfdrxhaeWwESawh1zSV8N13eVBnW1f6jwUJopWv1uo8C8LekncLxK4ujTE4NNJeZZfnc5ZY1qni7p25CK9UtSJq",
  "key21": "43vn76NuVjoBJUVNWhB9rNezKAEUjg7sARYMskXUCwBvR1A9r94PMNYANhrPzZWZM7F3LEY934YHQ6nNEHuK7nvR",
  "key22": "2pUGdHA77Y6ReddecbB7cHA4X5TjXSnfwyB8eCb94fM44ZYzaSuXGX2EXsJcBcqPu2u43Z2uTb4Qcnd16B6z3VRu",
  "key23": "5AkD7Rr9MqWXXG8LUgNwFFXsxVFAneJgU1TD6pr3wnDKmJJQxpDz6xDHXELpyyuSuNsEzU9K63vsZPm6pxW1Fg6X",
  "key24": "3uNWAnduXNcnskSBPbtnMzNnbHXSHCoL785mshV8w66NkqcPrt5GHcJCwTaQvAJEJGpy6fsEALAR4LvwAwhw8XjA",
  "key25": "51u3QuZcAV6fswz9kZQBctZb6yNiN2JChQ3jW39RugX2EXBetE8RRGVn1LwbuNSUQCQQjehn1yeS8q1EuYD97wBz",
  "key26": "3kqhiGLGWKpBvNtVDFT7gScU4DrEswt4JGxEbCNbj4PUpqaJEDddPqWxL9pggk5fsJEL7EqLFSjeVkV1aJDEFbpz",
  "key27": "3hVknssv85H2CLP4MYEAboyF7mnhMMh6UdXEP3SjYLXmr5Q5yLdzJVJrvq2gLnNFzoDem8EhX38FC6t6YPqrbX1o",
  "key28": "59eAwLWSwaBiiNPecWfUUBs45fu4gRiVh8gHdaL6u1TvpaNhcBkHABmPzvPUm6WLJ2FvFKaB8XT5ozXCELcd9Vgu",
  "key29": "TKNWE2KW7XbJocKVj8Ac8noUMu8ffbmrAuKwJY8iXbxpZ849bXpDZFPrmDWRuYCy6wevCG3gGeAFu1wTrAyYN2e",
  "key30": "5vzrgmFzYuwN7Z2Q396mxacfvcJvoq8GJVY188MXfBt6FB3zdVUSQ3CD8Gx1RhDtsg5V1aPxtMPgDK2KG6hPiJbz",
  "key31": "34JJJVjLF1hdn1bSuTv1dYCTD7ZWGb8hSyUymmjwe7yifAWjKuvyrbhuJpkQ1GjBQAURxBPCphQ4MEfgbeiGUHUE",
  "key32": "2EF1WEzmTS6ucYHdfH58js4VNAzi3rtXSQpjy6xFN7gE29UBpHdeDURy2R6nQk7E9RAXBrghW6gWmQvLmrKNWwAg",
  "key33": "3XZ7boDGz2Wx97ikhk9yiUdQxyjvdAYHyYdgT58caL2ywaiC7ZE3BDdc93W3DtyyzYx33oFeZKin5M5R49VE5jmP",
  "key34": "3g5Wsg4cszDjR3QvDLPASD8wvkTFvALQSihkBpWv6DEMikGeGcPmRiQnq1MbWA1zDmmYan56VvtsHo4LcfCaf9wF",
  "key35": "2p5obPA8vny6qLiUYYXM2TuDGwH2RNQgnF7pgVxfs8wFwsXeoAXwouyRijg47w5Eut4tikWpsp4iBdNT8Mn1uw1K",
  "key36": "3P4qcGk2NGsKwa7Z6CRyn1HERuUwXPzm6A2H3xzxKmQqdHhZrvWVEE38Uo6tnb8ubQNbS1Z8cuzgMCQ8qCujA4cT",
  "key37": "5jxLumR4Yy9Pdy3wcsMZjnXfURzp2QB5jahZ86JPq4mkuuoUjtnaMmEvQawnbAbqej6P4TAgtC4vaoFiKySb7Vjq",
  "key38": "Pad1BH8rT3N17p2Z6ZqZWCUUGBDBJtGsun9kz4Ek4AncSQDWE8uDqiKP3YK5Cit1xXy9XYejZuACsVnWUE9nPJb",
  "key39": "2GTPv9NgMXZQH5jz6KsJNhHDyjYkJUa9CwGFEacoZucEwRoGaQNo79qNhFtiLos9Mzo2jTQ7EoWMi5FutouWbL9T",
  "key40": "3sV4maRpA8LAqnRiQh4b5VMfjbM9zgTgVYW2X4SB7TrSGa16nRauh9MG7oFHD1GXmDx5JeEtufopaqe9stxTMwTm",
  "key41": "3aanwdzPb2p7YCzy4cP6PbeAic1Co2Zrf8jfymVoYTsriKHU341s1YdZcWhdthvnq6fWNNJYiKme1LdLfWVTmRv9",
  "key42": "2ehgThrNKfmJUEM3XeVLJqgrnaqfFe7iRxFV6RVDcuAaJhjs6fu9KnYdz9WFEzKrT9uJNA8nSZGMbnERL3dfQ1rZ",
  "key43": "4Uj3ThB7th4npmmp7FM1YLXfZFYZ1Hd3pKi4856rhU2mbFYX7s36odynti57BZmjoZtZSBUGh9GXoCi2UH4VwRsE",
  "key44": "2bsqMYBMC3zmMxQu3GYQqguBsZtMjmmX9L3tkPgewUiT95JRj9i1b3bufhbr1U5HVhy9GBB9htFq2kkXE5uGxmv2",
  "key45": "5RtTESKMSGshMAcSGHG9X7sreM5429pgV86m93qXuCMHa2zmQUb4xBc92grnfdQo427eZ5NeF8rmwCMYrnVwtoeu",
  "key46": "2qt8mdKWHSHeAFUSPbJkFP5opfeBKK8tWwe8u3X4nQeQUJZ4bi3CEJ7xarbK2BKYH4hbvpNVHWMLYRv7UD9SL1MZ",
  "key47": "3HoBKVDKriq2WfSnU4jaUctigNjMV8KEm4jqtz1Jhcy7sAcBhip6sAZKTcMAJq2dorfktdAQxSYUzh4kUfZGRn2x"
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
