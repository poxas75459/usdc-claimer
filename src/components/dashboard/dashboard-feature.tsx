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
    "2hbFGSgyQ3A6buDLq9VBScKwPDfoe6kNPKoCC9ooD9hZARffyzLGCMDxD1B3pdQEFs5ivxG5KtU4qH9KCDtz7T1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272reqHrAKLjg2Ppb9buyi6zoHJrLdoGsKAjaAqYGj8MjGDf5C8rPAiwnALT5ZSH1xBSygtBxWR93CXpwSiiZa4E",
  "key1": "4kCpgoWiz1dsPRr2FjohEjdmVxZruybLXyJAkVd9c7JUY2oTau1ftmhKVRNiUfJe5XbmFy8mqq35D5Y5qgivbuvM",
  "key2": "2TaDvVCAuH1RYsNXDewcbhya1HuER62Hwke9CDht21335jT6jh6svLqa4bQYUuSkJF2dPH1jnvzSC411VFj4oVi4",
  "key3": "2hFvkf81zkPsRMtpcxomiQeHtjwUQPfntW7PwPAqsmieYRZjxJHCwMEYGD48tFguyvsxbeMrJZxEPfZN6LKPqDtJ",
  "key4": "nJUc69rHTqUNYHAs7C7HQSQ5jJSutAgtS1VRyNQH7UTsx1tcz3gjSxMLLKCo2t8jeR5Hy6peYcQcwHr5C6K3Y3N",
  "key5": "5e99qmfk1rxnN5it4D9QhtZa2SC5tJHFGfnWegGpb7UnzRZBdABBWEZ95zXvQPV2JNMbaMBmA4XMZvRjqEjwvHhc",
  "key6": "CuvHN61scMnJHAtp91hJQqgREjvQfhnrBX8aFEHsRbvGm46R1PWarGcezSrrzCeWc5cCQbt3wmpoodUdESmieRt",
  "key7": "3HMuL3AJjHmQwarAPDtcSgECSqunCQZcxe9tM1zNxMR6rpEuX2PDe6eV6ZCLqLsqgTfLwWyzf2syAp6TZujNXvzu",
  "key8": "3zvnrs38PtVqnYsCGVvzeWkPoLRJvNvCCfXHeMEXzHh2dKdZPSj8SvUSFJH3CFEsqRD4Cj7bWsqeFCyKt232uYFu",
  "key9": "3ebDtFhUFqAnGjbDnmmU24aUUV5Ht1qU9B12HKvkmJZASTwf7ro91rKYssFySVyS98GpG59JuGTHACFL2TXEWuum",
  "key10": "3LxRS5wmoWpcf672VqRLf9TuCjESjkGHMoURW8NTjwxWEQESv4yAefgtbxHLm5uAWZaMf17KtpveCRzgVmsywT2x",
  "key11": "4qXwr5RAdNGo73PeWKDVYWGMezLwMgwHfcjCKj9tAdYYLooMZEH2X4YyJpykLpKPanTThLbxyTA4JXfuLZxrXHts",
  "key12": "3LfRvwW4zoHtfGvcVtZVETx6UwfnYEw68etoQvDppywS6moqvzuqeBzEBYvQUmrSdh1Xs58g74iPSd9gNzeeGjSc",
  "key13": "5c5SpUtfR8xEoNYjsc9hNgnYuhw39ptp9qoAH9skQx7Q1FZCJBZoKcDyJoCnsCU7PwRbLcNbFw3aX9LBuZzbWLqt",
  "key14": "tC83cy3FRJAeTqQ8BHuAA4qvUvBS8hBVw18caCKHZnv4gCN3N5yjDuk7FNjcvm3HFct6dXYjtUcM9EoqSpmMxjt",
  "key15": "3STGR1qpR4guzmgfran8oKheTgR2F6EBVncpU3CJLbXxkoWLZcmo1BMku8psmUPKB1Vc4qSyKCWR57jDVmzY1t6A",
  "key16": "41MiywdgfxEdFoy4CXUdW7QnrqKmvygwyroTLBsFhP2ogpEcrVT3jCr8Yg56g8uFN5dA6prGiJaRxJ6ewx5n3Zno",
  "key17": "4HvXb5Pi5NMq8kvBYDLJWACnx5wpxtw6TarfWF8PsPJFDAKVrCAfDD5csJ1h3sJYtrCPFiRToJr5GbLNGHJiDLAP",
  "key18": "4WPvtoGjdgB1vaL8h11eyJb5ERYMvcgGodnw6nEshuwh37JXdgHWBTBawbVd1keq9heZWr5wnNXEXieNjzf37YFk",
  "key19": "4cYbhG7xbFXvdVbqSyEFVWy8Km8BM38irYXzAweLiw9hVLbPLSKdVqZioanEf23wfoFXXdfWCyX51jKk73UjfsXk",
  "key20": "61g5wdLaYQkganYDBERCaAomQK4YdRRzZe1gDXbzPpD8vvczrsA6qZZdfos27uuVyzKNk7CMSFHYe5pkeS1isvTs",
  "key21": "4Q3B4aCWVkG6L3WcFTUzpvWtFqF23AcUbFgQAMHW54msuhkLoVLrKxVKvnZzmxpH7qgnwqbT7Uqcz2CBF7Hy2b2m",
  "key22": "3gGscn2Ur47kGFV5XgFEFeuYkXjhMEE9KysJsNV448fYLzYNuat4hGcbYB9yG1sJfVwfzFt9MGcoqGV7wJogxNEj",
  "key23": "3yMwiVpid6qcd5QcRsWjNZUJPzpwkfYRRcxPoz9EQ9rkKttYRbuqyMeQuyUZYwAGDXSMf8rsn424KSY1s4sesGCr",
  "key24": "26zmjvVbzLhcZtdAGjWfq2JLdBCxEUsAULDiDdFou4CeCG3p7NTPiXgisHF9t4J4ozNPgvixf1A58QzLcPe59tqn",
  "key25": "3AftVwevLQTaZc5DMQUYmfTzNzFsWbMx1rBzTRqx3Ts86xtndTchTHSXQqqDHc3K9wbW1N87YCnzEw1ccM39e89H",
  "key26": "Ktx1yeT9DCetmPUaeJRWUcbGGWA4jp4R9BfXtwf7CfHhGMuL3x6FqxBd3T72URiNNMnSt3GjRPGrm7cW34Saf8g",
  "key27": "4pVLNupr9cUYVwhRgmdT93jF4FoRe4LyzEGPXtaFTZBc3X6Qs2tMyGD8n83CJ1iWp8uRaBfJFFRBStBpST9TqRD3",
  "key28": "iMD5unaSorAYk2yGe4VjEKRAijfwRwZRcx1eDdKZ2KXhsedBq6tqkJHNaWzRsxTBqF1hptDrUP4qHTuwT1qmWFZ",
  "key29": "3NfPZrSrT7zWVM8LA7mxvRFrq8YejEjUuNAHpQeBjxvzQRFD6EeaHKaujM9anPdQy6sc55ZBPfW3usGy3mJepm2r",
  "key30": "4kGo4bJGRbYycdSH2aNdEhHQ2htDWgsjZ5yzGAGW5Tr6PLNPKTfyVH2LXhkPPuqSPrPhpVgEcpzs5FcPd9xLXHyM",
  "key31": "37DSnQw1UP3abkE9cdmA8g8x4CAXz48wpDrTDfLBB1sScn3x1sMfkBhh6Bi6iWSP4d2aH4Q9fhEZc58mQoNpZkdJ",
  "key32": "5veQLSCrKXVMFbRnPmLTBPnEY5KjKbTA7sUhkGoHw9GdgJaCqQ4ScU1eYaNebYrE6orm46eYPPH6dLwQTDfFhXNd",
  "key33": "7TdX29enz7Uj4Wcki6h2bAfB1NRcpY2EkvKep7GkKhcAv5MW5KGSEUVZ2pBcm3k5tuRsGvtN9BGugkgfKwztdws",
  "key34": "42HcyVYi3HUN3sLCxXE5jqenCGSUozXUEFspPoyWBSerkvMV1HTgHfhpPiLs2wMoHDtUrC9EgCmscnphyQfPq3ei",
  "key35": "x3vDRWGGxS4S1rojHXfp43iXVch9rq7bdCjM49NWwuB4VL1yxfL6XY1KwPLdSpwJ2tw6LncFStbEnP582641Zqy",
  "key36": "4DLg4ipwddtH3rmm9RSB4NPm8xSfei5yjsFE4eU6cUAbrcWMn6AMeoDELfDn9c46iyuMFYbHHo4M6N8JtTBGNzW2",
  "key37": "5UBkSrir4wagcX3hbWowHQWdQMKGMKtjNUoyoaQHedjkEqbK1ZrEhSwkbqyUd9wxcscap6XXX4qJpXMgdzMwmnJj"
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
