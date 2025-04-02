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
    "36jVa3iKApWWTvG9zcUP297MBxHwZ1Z7NtY1t3M9WvC4iHT9aHqTt6s7egkAtPRdL71j8U3vWrRzMyjke5W4EevG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGVFRZtnnKi8c79Yv3msBdE7ni2G9cvdWqVa3eJM68qkjEmKLRiDfJkt3eXiFXBemZ3Mk3QCaDD1Wzaie63fsyQ",
  "key1": "r8UNN8WRhQiXsFGriQL4m7pBem14yuz4McphyekeepAoUnp8rH8krtZEWFQfsYZ2hbo8rhTba6wKJMownjFRjdk",
  "key2": "2eVPM11xWbtHRznRkkVx6WzDQPUKMqWBtjQLznpoD3nTqfRxWF6wACA1biPH1FJdTn2SwX9taXjJ2wEGtZqnJPTg",
  "key3": "2eDnuxgjCoaR4xA3zoQcjzukQLqpqVfgrpJDcwqRnBXRMxnh2UUPvnyobUH3GgwWQHpTTxtKrTWcWGL24HKKEJ7K",
  "key4": "66J6To7JtoVW8zFSUGC5x3rU4nLixgvSqwFVZPVxYycEUheirJEHgpj2R448wGAFXAibC67GMULS3BovJJJGsoNk",
  "key5": "YiyBJpDcYauTMq32JXqDwcvPf1y6ecCPLWiJceN4Sif2bFAchWe8ja47dGY2e1hhK12VdKM25u8GTfyAirvqqHL",
  "key6": "3cE2Hw82dfCgN3D3W1hnQCGtn2MTAnstJXBJzBB9j8UYf7brR7NBMQPxeJDJpoYZXmRCmXYAYGkfQjq4DFCkuF8f",
  "key7": "4T6SzEuDRUFFxGXDDTKzjc4z4AfMaNqc1CvhdLwRPFFmXfJHsxyf8ZpAUBC6vxYWyuGhrDRGkHv9UDpNmeXy2RNh",
  "key8": "oxBxVwPannG1uDeSkBVvXzda6oVhYKK5ebK167gkYhqcQmBGeJ8Qz6Qr6D5JcqdjunuhwAzw9nBaJhAsSNCyzep",
  "key9": "3DrqakepwYhdL9UXpA6LbfiXp9JRMo3F8zwoWo26cPoQm9djmhQqZ5KwN2uV4ucLcSLjgvaUVtNPkQHtz1Pa5Sqg",
  "key10": "5xxLTNQasb59pjiGnkiiUXWApWku6yGQTk8ytvPNuqinyAZAL5qDMdPhCwfY6LUeC1uD4PjirKUQr8BSQp62wFNM",
  "key11": "5iNUKEGHpACkxhT9q2W19HgGQC3nr7dpp54e4kectXHG94Ubo174v3T3pvTkTeBPUzRKeZHpdqCeGeqgWNDnLoK",
  "key12": "3ZQGGmyZspHxT88nNXLLEfXi2sssoV5sxLBd36VuTfRW6n1mszqV7ze1wBjNQRTiF72Vb4FtVZiFR4woXX2yYLBr",
  "key13": "eJhgoa9Dbg7QvhuCtVxFw2kY5YfFgTFL4LUSjr4MU4ofRK3dVriaTMANrKygthSM41D9WJ7Lm5Cf4z4Gg3GFSK6",
  "key14": "3hAsHmWsx2FVKsbKMbYhcFzWNFMRTToiHr3w26zgszUUgH5onJpmnVjtwUPoxog8Shin32GfcTNC3nBKXTWpFAwE",
  "key15": "3gewBNqJ86ywd3RuM5p65ECGa76jGZZmKLEqLo8rEitm4Wno3N34RDPRRhPTBtR9bB9yiAZKRpsKKFPdoRiNw7fn",
  "key16": "3hESUhh5JCjYfks6GwP6U1BjVvyxpk1LvqfHmiyEYGCazerDKYqoJUdxC1SNPvJ6Wa6gDMxTGNHdyb1HTM9y87tu",
  "key17": "2aDhN9crrKkax6E9z7BcSLmEeyzfhuuTB674s9YMBoZoZBcgmEmZiZ7VSXGqRzQryCTcTYW32xmKSqL6prcxhKCh",
  "key18": "49jD2MuYjjPX4NE849Ue9WyNrhAqFZE2DRhsVb9E4xCKh9PeZsyK7PejCgyhSCXLirbMA2LhaGDaXABGdYnDnx9f",
  "key19": "2bHHKd6se2FmE1XAJepZHmYpVZWnPiirgYShaDQ8ArvCkr6cR9fcyJuQNVZCFCeiGkdEiZJ3bNYhzheGJqwMgFsq",
  "key20": "5ZMm6XYJmgCUnWhPAv6y8x98kxbk6Ug8ycwJchJAKN7fMJCptC4KyBPBAfqAsmhup62BRbNA9aba8JmRpgne4eSi",
  "key21": "2DWRgZ8LuK2wa8YyaX8UJUyUTrsFDjnudJM3cqGs6w83ND82CasnfEMi6jEjUMXKX3bRu3BmYzJQrxuDkxsuYs1N",
  "key22": "zbhUMHCBAQsbQLqRP49Pxn13NBCRFT53YadynCSDmrQBA3b6Z6Qb4eWoycJuyayq1abpT5MPdxjE6amAYM1uJKM",
  "key23": "5douSjTF4nc8RWHVAs1c5FrCavKYFEL3JgJzwcxPTYQL8A2g96qFvngfwevSBUDZKBwVdy1DmWzn5MCtdddudpZr",
  "key24": "67JjCpBuPUim42bn4eg7ZCN53hp9mGfDfkrBaybGuVYde9d6Ybojb3CKsrUsSkGkFKQ9FRnyj3eR9CYE8WF7hrhf",
  "key25": "5wAuVPDsp4yjBjESbFZ6Po4w2ULrme3dgjfoDwM6iHc6D1h4cWoCk1fahMuvQsxffAf28SUupCQNk57BFKVtr7EW",
  "key26": "2FgiZiGbJaPFxVz7BMurH9zh2bJj9MEB8TtyonREXTvYTmZ7SaffAsFiN8oWSsTk44eSUCiku3HZ3MVanDSmiKff",
  "key27": "4qEkW3rNaW73wkL7Kpwu37H4vCzaSquGYoBkzUUmbY1M9Kj17FLS4zNSfpw4TPSBZpUcjjwhdnWaG5n7cSnK6RzY",
  "key28": "YfJStnN3K1i9vvGF1juGB3sfE4jFzEmtDpAW6p648W48fbFTPLjtzxeLmoi2rKKS8FpHgrZqnfN41x52qgRuQ7Q",
  "key29": "4NULwDuQta6YziTnsibzp86SWz9gSs6DafUwpPB4mcnpDSChfUceKbYV6pjjVaAcUCW5KZ4Vom5LQ7UpDr1dJqgQ",
  "key30": "45TdGHsKpeF5MxdCMNj7hRTETkp1bbg8Qm7nua1v8BWyhmTkcPZyrdXjh1cS34rM2sxLv4jiVG4i5aEGE5ZVgXjm",
  "key31": "5ZwbpRMcL2dXBqoC2GHu9BJjmGLZbhZJThUjMidc7P9gnQqbPY4bDdKXCw5FNysoGKnAnXfUPH7HwrWdSAAcrc5g",
  "key32": "4vqsbCdwSzZvFC2CMPPevrhSGgohShtFqg6SgE6yf7jGFau6VPn3e6Ytc9ZcRSf7WPnTd149ZSus4j8VtGd6Gaw9",
  "key33": "29XVutbHfciRXFPMV5rTfuvvS2sPKGCfNT6tUZ4gYhi7ivnkXRYVk7aP7nyyMqdcrLpGPsg5iKYhvP6s9tguaDFt",
  "key34": "5jjkoUzXWLmEmNpBZjEDBFndS86nQZ4HUiTgGA2AZ3RbkQQzGaJXwHPYrp8syALLRSNrsnPCiGKtdjM31oMrCXY2",
  "key35": "2KZgXcGTQR4JYkbWEd38hwfjFU8dmeDMNid8ysSGfRhUKg8MfFiYLDDndGauheaogzSiR7fwDmsihKNLrEWyxnc3",
  "key36": "4WNxUAxX7H48iPm4m92vNsHHAudPrjX3fyay1zfxv9bqU9FYfqHqMuG3DNz5H2bpxqTtrkpQnv5uk56bzrt338L4",
  "key37": "3k2qbrrXsaCTb6nSR9Pb5EX31H4U8GUqXHTjsrwvvP6mLXTDN6ZAuyWpj4BVYZi51R4YHWkMb8zNtMdQNRE7PUFf",
  "key38": "3iBq5L2ok75nfpP7kG5iXWFeCyzafm8PEuwspY23NakxomAbZYvpBa93bDmgaMSPiFFFHqKgm8Gzq4iPKt7ftR1G",
  "key39": "siQETyUFktLGetnbKV6c4u1xkxD96PYqVfCSaotFih8Uy4brLjNgvrWpbuWvi3116oMnkJx8bU323gWNjQirZjW",
  "key40": "38uUhgxSGmhmyKDDnM7JybosBoaPjaKFE8pUEBviwnFDDpYqQd7ySMQJqVPw1MoRbPM9xZbUpjYK8aickG6Xd1Vr",
  "key41": "58U3bgxg2HsFFumNySdWoGY7JRhJH1gsV5ZhmQwjdKVUMDpwhWY5MCjV8gLsGsXaFVjwzEkABravAjQkQGV1FDku",
  "key42": "5WNsVjBcXjbR9gt3rptSswRVh84pbb6U3j5k24nD3ygYJWEv1dp3Nq84rwpx4o3QsCWz4nnGBu5SsB2G8T4Yw36b",
  "key43": "mz56gxhiBRxvpFPqLU6svMRFZM8MsixZ5fydVVdpreMd9JnBGQh5smTqhDc13aB3qicwYwjhNC9NnS6fmuEdXsw",
  "key44": "28FWXij8JTd4uNoST9HKHS6MwdUfMgXpwDkAcn4kBf9gnMNzdFKwU3KDwGAeiWTuyYwbB2D4TTAU7yJVzZEcYDx8",
  "key45": "5Db2M597bDgsPKpNLHKJLKYp5wScpNDwHC8scYXfSpGJuC6TxDMKiYjeoZRndmov2WYfw4o5sA2oh7jxrA2YBRn1"
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
