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
    "2j6rRo7U99qg4spJHE9CyMGLKPWNjrGePTNLEh995Rf6iHxmyqyBiiAU8qVo3XmYkHgaqHG4caBXcZsjv1dA3ddB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hxLye378zxv4fN7v5xspjkVbybYQicraATxPX3C7cDkH6whjaRq5Tbqa84X77tnufA4qVAbc93jtVPjVNRyJrJ",
  "key1": "4x2jMxbF36tti2S5QFHPN3NVxEw8hxYgSfeyxSCWP97Bj7pBKA9F98JLQTuRe865qWG5MdSUSsZ3eZBhEvzzVnFe",
  "key2": "cghUUkbgrGoxqqGMua92mptBuieX9XKwU2P7oz4QPP2PcuvW74wskFWqxWg9bbm5wHRRuPkvG5NXrn3a1qVTPr9",
  "key3": "39JnkRFF6SNECQdQQZ9UwyFdZnRS4reWgCTBePc1HoB2741tSs92iJxsZLDfqJpuQst5cH8qkdcU7srZKjWDJxg3",
  "key4": "mVyiWNihGe4q4HzqpDsgun7bmZQ3tF7cW8XuXkm7SBRwnD4uuxVeoLGULAWfw1bukXjnEkPzUCdN1sRxxbHFknn",
  "key5": "3N6KWby7vVmeWcE4f2YuEqjmvFWcsUybniwAUfmyMBPn2PAbksg3rMaAUL7vuVAs98kLR1auDqU4QNYVh13x494w",
  "key6": "SYUPzc9GbkdFDHvQMkDGg16KzG9W4ooGhYok4JbdrmRsBBiv6majWgkP5Rf3Aj6P1PT7m3Cvgw58o8YkG5oBMAz",
  "key7": "5C72xworqCBSPRZpKqgdD11ZqphQmAxEESyJA5uWx87MRHtJE6ooQt3uDcUdCsSu7CHbUszrEyrqqERgUg8Z68n6",
  "key8": "5jBquPQPQU9e9omp8ARbbvyy2a9VAPsh5mGEr4N82eiN3VCrxy9SPfsBWeJpzi46GkgmYJSTCMntBdSAdhETRYa9",
  "key9": "375DVYfiMnyW5LJQawKWvEq8kerjprtizJLZrP9866M4yg9GfmMq9Y7kYjAtNsExH9qQ9MhBy38GwCzJyS1gsB16",
  "key10": "5J1hEmMWc9SUJ44x67nJNrTo4PTopbbq4KTobSS61fwpGqhWZ5rYFUb27w5H1ALFGmNK1RHs6kYZZfFZYRTqSsum",
  "key11": "4fs4eaipFNfiTTdhNaQsons1Nni4qJevpPYC3v7QFuSPbb3xb6Zii7u55UL9RoUHt7uyQK3V5gUQe28XAptLabPy",
  "key12": "2DB7sMpJewYXHzxgXVWUyTAV7ZdhHe2VK3dLSHmUSvDfnM3dYQfzAwjRdEaRBbZxvRDPy22pDW2p94Pdnvsrcz3q",
  "key13": "4rQkTH31fia2uUJ4YAbPyZrNaadu46huyYk9c6ejCgWo1Mr4wddUb8PR1hpRNHfMoMSMYKgErGa4xDLsoT6msSEu",
  "key14": "3ktHpUqBTvu9Wp5cXuAxYQMyMYS7ZQArHr6qsYJfW2tvsS6brG6Bw8u82JPqs1dDFJgNTxefZGEeWdHtzPdDTMtW",
  "key15": "3pTwsNR2HmaErEct5pxeVNurHAP5dwVB4giZVY9tZAu5XcnKwjCydPw4fytG2W4bGG6Fb5WxWF1UiNh2PqLYPDBF",
  "key16": "2PVD1cu7NDL6gLxoV16qbUY2MwjtU7LkKAcDGUFDmhFHC1KJDEnPpDeqjwxNAFc86aJfddztRF79g7hu8hsvTUvG",
  "key17": "3thswfmRNBTqsGVHWiQJozccmuuHGDPKeVYQsUTLf9dsx5nHfnFynkTBkRpSWuCJxrFu8CNJtz4xJTAguB6xFELW",
  "key18": "37JV7AaPrK1km3D4KxVuynKi93XpaMevmWzoSvmhUoY7dxGmGH2X6aHj4omk1dsEb1BDe8HcoKP88UsPuUEdwTcD",
  "key19": "3rjyPqV84jRxEgYosf7LsYReXJfixXTiRfKckGaSnxgvMxFw1WsUn5fwovYjid1Y5PfmErRgDHUtvMAyQh44pRG2",
  "key20": "2Ypdy2dEh5TiBUz9Q4yPUgaCXYztVFMPqVfe5nrpK5UN7jpDo4RtgZeWB4PGNej7A4ni2MWFJHTsbbTCA5zVcPvT",
  "key21": "YASG697simvWy42FQuCBRroC6FPkrXr8zWLTkWdwiWCiSUis21hPUYiGCJLhbdqGjE89oGM3eWSDVaq1PxXatWF",
  "key22": "5yAHFpb7WGWG8mCUtcYDaVeUbvdC269gcyLTSURj689N34dMZGJh7iyR9XtBiNTpMvygVr6qQ7rkVuwcdmiyDfq6",
  "key23": "39fsmsvtDmN56NfvD1hwF7bgV5DW2CF2QFUF9YxA7fUZmsnSekrPPbKU6ENkGQw1YUJncxdPRpkrukUS5sd5x6o",
  "key24": "9V74tTibfya89Fa2bUTDd5fpBN2nSSuGCTaMmNG7HiN7nS2jNMtkSzgWftTG5YVtF5uqdeVf5Kfd2NhnPPyAYCf",
  "key25": "dhMVihzvdAekWFbuRna8mYZj5dKGehGMog2ecuG1hB8Wt9ZLqtS9jYopCwU4F4cGghg9gDoy89S5C3KHe2Fh7bi",
  "key26": "JAoTRRTsetCJxrgrL2vZdYg5HvWhNdiEkrzia2p7sUPrAp6NoqLJ5oNUtQjfHLvBstatqgPjoBNZfQR424xTP4t",
  "key27": "62egbqXGrUHQ9FWj9gdAx8s1jXwokVMYbbYaUBKMcDYSuQXRiyuHFt6SoidTSQPStSNqREaMKzisqPx8XupLyQ8c",
  "key28": "5MBcuisujibMybxBSgqU3L4VKPeeke4dLPQK8xQ55nQWSiEenMYP4nU6rCC9hrUhbEMcLagJEtStA3vGnpZS5Ea7",
  "key29": "HwGRPSsivTg3ro25RFNa71LmHW6tXAXfQVUQcFTEjdrB7wAiKsKzL8GfdWBYBwtpnkkmhumVM5PJRuzdeKCPNcL",
  "key30": "2FU2wm7HhGU9m74d8iCEGVuSFPJ73YNkpTH7UBSxmH9aKrjDzoWFwvxmj52WmjpXwgZae1SDiQineFpuJwdMtmGb",
  "key31": "3Xf44FXFEH4iEuCFZ8qoJ6oQQzDaEveGio3YybE88Y1fsckjy6A6uBECQmposRqgiogPw2UubXq1Sz8TWpKce5Gi",
  "key32": "AR9egwLB4T6PE9ZVmJFuDEDkfEeUSYuyVLRFd7URanAdnqryaAQ11ekzAxkjVm41P163szSRFvKh9Ah6jqrJvMh",
  "key33": "3dEkkKUKARnU8voJ8LnyTH3Z4cqFuGLXdFnLZLFsyMezb65LBYTvUWiySmHeHdKewL4pA9ZdokKZTad9qLPUPFgU",
  "key34": "KbkirQbFmSh1kwFG144WWLXyHjjASWu35DhUUJ3RJaqyryTn8tR6K3LHzwzouGxgS1FXnDGskU6KsaBwM3EErPE",
  "key35": "sgJDn2eYVK7PSH2R9VPtYNLJXwj2MpC6RjiCT2kpMQk4yZKoQBoHNqvVJApVtfkFAfevsgyT9pDme55KeommYpS",
  "key36": "2YVpH29DPWw1jJYRMV1z5LhVqfFWb4HM2yYu3oCAJNk5iiffBHHZfRoNnoqZMjJ91MYQqMfWKkKQvJsgw3C9dZbR"
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
