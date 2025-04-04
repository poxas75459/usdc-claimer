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
    "5xTSQ7AFAVkg1oDBR9LDNiSaiZ8uZeiX4UVCEF88eDLZ29A9oduNPJhhjSxnYS2NWdf2udn8UB1nM7V7bD7c5Xe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLK1n7DLCPEbHsNzHdZqd3a4KikmpAHjM2xArcJpDMsPWAAfi25EGe1U3Wj2DteAJZygyp71wna4FPtF5H6crNe",
  "key1": "3dYH3jmYYHDZS8nA3aNQyY1T3e7vFgu9zEG1VPXyLg9f7eoAQehbriPK1UC1ngxU95yBTtUGm3VTBCUs51cW2aFt",
  "key2": "4bsPvPxvEsRibVnfnQNPgUCy6B8ahayCrQhK1RbD6RZ38ScK9yu167SFHPxXi7qWkfAxDSpypjB7a8WrJHmemcJ",
  "key3": "27JCZaEJ4Xrrfsd7ybFx462Lf6kZXj4Vk3BZKLeLURWFTEvRsrakyL4NKrZCaM6FCAczHotzqsekkMYth1CdCqBS",
  "key4": "49KkkWNorQUFyA7qZagSSc91yhbgqM5AS5fqgN2YfpDeWsKT4F7rsjrdviGX2bh364dXz8w7nAdwLaDtWkWcUjxn",
  "key5": "3dQvjWjc59Yo5rJctKskJjchkGb98YfLM3afixrGSLJiDaGfB26smPRSn1asvmjDeVhHNCVjL1TYx7bjSpQW3sfL",
  "key6": "3NsHvTef8qYKoCzScm16PZenUTixmp1AUDd4rmKgqMtzRotHyHu4WxoCmeCL8Sd3rYP5UaTBahrToMqKRwbaXa7P",
  "key7": "5CqWBktoMurJ1ZJRtNaqv11qw2W14baqyQ6nx8Th1DQRfHvmbCqBdypwpgLe3FfNgXW7W4PBBwzAvgRMfB6C7V8j",
  "key8": "4hunrVwhY14mFDs87CW5whFiio9zC43DLk9u6jiioNcTp85eQJApLsnj3y8AyYfbYoQgNtwtZfF5a3sNvPNkqbvn",
  "key9": "4Nx56eWr8rRLiX3ngVLNURTxQUozTiucg1p6r5XAQK1gHFNvPijUQbbZdqPXZ5siE8JyhQFrhGLtKNGkbr48mmze",
  "key10": "3d87EbuyqLhcNSK5tJuLTxMZ2bRQfyhzpKsKacMSMuJVk6CqsagxWM8cizq85zzDPJBeF2NskJDc5LnBy1yGFRi1",
  "key11": "K9xHu5Rb4Etz2Qn42rCVMrcHEAxmikW1HUiBcdaqCrwmZRs9yAujV9vHCiX6rs7ADgM5jPmiHGMJziwnfyDkiBx",
  "key12": "PSuFubyL8ckQ8HvehmGqU8UQFRY3rL8s4msicfLFFxDNmrEDTEgW4BaMMBeHivFNqRw63QC2qSAsKgCFjpkxkBt",
  "key13": "2ACSJVdp8psmk9kQjhLAU8H5cq9H7q2oNKna9ZSb8PrKa9RDyuv7vokSFWyHj3qvKnJTxMLFGA6UGeBHrV1usgNq",
  "key14": "SPx3tyeRZac9TDYd7kdfLqTC3Tn6bgSMyhMLowtA5opWEuv9MawXTny4ejGDDdizkVsQpeK2wXmjBaXQMsdtb3w",
  "key15": "5MnirMd7UE8L7ReMvUxbEMoco8M39fEMDqC18RWk1koK826sRzLE9TFAWPLCTwnuKSs3eiksPbESQfZnYoFHjbGC",
  "key16": "5Hzkk9bBnj3NFnaH5L1KJtqgmxqiooZZxccf3msj5crn8aPx5GtPMSmjFpUscSMGw7LAon7fJpdeXrmYqnhbkSFL",
  "key17": "pjhgvGXAxqsh3P51JjHQNdFfa6tpHoZnAyYisw7hiioLrBsAFRMdGaga82XmU7jPymfg3KnK5a43psuRRUXdSdR",
  "key18": "5MpEC3nTqTRfWhvsUexs1ufg5UZvnsazfaxh3fv5GaS5JBPscNyyKZnoRqyb3G52fbbmaobndEfP8iHAbckZsqzd",
  "key19": "5LPg851yToXMe77NS8ThfgwyjjjLAsv2YrEntEj78uJmB8wGbAGfrLVUE8JykQEPcM6KV81mMSAqGDWzsnJsodjb",
  "key20": "5PoBDBcFzJhfyyP3VCCyZ7ruookRY1yVUc5ziX6k4Yajx3kvAGZLksWgGHzRSCxoQYxncEzKFZSys9x2QGuM7u1k",
  "key21": "3X8w6t9ZfyWdhdNknSKJp8PLEtSHjT4ScUgTurWBZSrHFduqwmHK2v6jSSvGJ7LcZX8e2R5WJEjXfgXJo3cShfbn",
  "key22": "3EtdmFdvSGSJXYpUM9Ggz2HbkCZUWyswi8L4uujgBVQE79c9yNVMxF4MGpPogWBveghBHub1cQfn7aQMG9pA2arq",
  "key23": "mtg6qiDqtEohbuCpRqtVkMQWvSCXKyGC3LXypmXGWgw5Qm9Mf1Rgp83Si8hvN1tTNi3dhUEUPwbLQ1cFbgrHJav",
  "key24": "5NqcLBaQUiRCjS72fdLwPv31Dj6JccXsywC58KBDfpXbsw9a1YgFiLtTpCtNGRFXiSjQz6BQwDuC3HxhuYnTFThS",
  "key25": "54CMU1dMGMUhagjQL3xZKxunDpJPW33iCNPtTjPKLPubswrDXpcbyaZsAfgvZFycxTWL9kULiei4GUSde7SWmM9Y",
  "key26": "AUTv8FxuEAuTzYPZ4LqRP7RMC5Uxxs5zSd2kSbXcGL49ggnwhCapy7AbhsLmnUUTZM9hY49ZuSbKNKtbejYZauN",
  "key27": "2CWMmMZFWZCmpgkB9AFjJdcuTp1KxnqSsbRyom2fFaL3pPXtp9AdP4mhHFPxQJN44jKuadaGRE9tko7v3yckNv42",
  "key28": "3imiWJJ9sgGzLrboDZDVuvsmA6QMd6Yg1PFMNMSxLLCwUs8xGxGpT39T9P85tH9WYJAnmrbRj6ZnkkP7YQFMMKpJ",
  "key29": "4sfrNzgB1xUAP5vQeyu1ojvEEp66nVT39JXJSxUQrNupajMbDUx5FrKf6usK6b3VK4LJNjo4Vd55NCWy6Y2dRSVn",
  "key30": "51T7ZkD29K6StvVyA86TnPbDNU8JDs9rqwfYZXrbCHzxvHu8NucwXsKyFFv5jJmy2zPDKjdMB5h9rYiRbLggfG4b",
  "key31": "4EV78VTNm2CnD9UxWLbr5K4u5XSFbBvsYJ37vsshQPhBGgiimm52eBo6w16HaAuSTdj2H9k1o3SkXwHTD6GszVTz",
  "key32": "3z3sQ7yB2X9sx2cLJuj7UVPGu4TdM9XJgJLYMTdPSwJThUj7tEh8sXC2BrCXcCXdiVbXysaTxL7WTgq9zWNwTNec"
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
