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
    "5KJKNXfaztkyETacdJEN8m3X9dX9KYjJFZZ7nPJQ64QqPYsq7JxDPQRnuQoL44huUTDRL8vR4M8MA1dS32gdDYsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFUNuqRpsYewWhp9JjTb7wxykzZXBjcGcgT6pfrru9n6qL4GeooxPRcPG7wGYWgHZuLBkUJKDaHApB8de2Rgx6Q",
  "key1": "5thFV8YK94aWzL4cELbASUk2UKQnVHRjb5RXpfk56rkjNHod24i5FLKEJEHnAAA9MSrNviiED1a1Gpzt6FwoRacr",
  "key2": "4omH6MjWuk9R3jV1Ue38VDzyWbVs1j5zwCsQ6uGju8w7g8FQEBA9xg13fe1gLzxjhmFrxerZ5rRf8UEeYDXsVxF9",
  "key3": "3WoCx4KNzouwNrSnxPrE7yRdGWEtD2vj8PUc3M5vsp3vRdRRTsUTntHsDRimS9pRrzExTdQu8D5hRAQesjvktmJm",
  "key4": "3pAT3pPQTRqmV3H54PeSPUNEDEhWCe4CgYzxKG1xrQkMWCcTbuEVkg5jfLAqEDBmxQHaNUacJTBX81oNzzG63Eeh",
  "key5": "5GZ1HHdFLRgtx2TEHg41FsynNyAk5rEux9bBtjC1Jb7uJXkHTY46JfeExyCUA1NbN9sTnG4mAp81fJzPNojXYiqQ",
  "key6": "3P1R1Pc9BWBizGMmXaNvXQPQoyCpqH6nViLjjrBgvPywrDjB7PojB7TJ6EHUSwZHTLVi66CiGKR3wEGQuGSZPmS7",
  "key7": "2Kd74EEiuuhRPCmNCbb3tMTcW5pCpfE6QagoFkfXLJLx94QSGCZEHcN1ksVJGN8DDv4yWYBgmcFTyzj1svkTRVMw",
  "key8": "64nxzs4wKuPzBbC18Tfstx9bMNYKrey9CsymY2KSYQPKhmnDrcpzH1PrwrwiWeNuoezV9cHVDKKiFKUUkkeocurJ",
  "key9": "4vjUM5F5nJdkzaCsffovdfFSDjV38nLYJ5f2esvGBMjy1pSUgcPRMdquvY5wjatCPZMfuLArZV2fJapv6H3oF2MG",
  "key10": "4Wi53R51EsMFG2LuVe4vf16MPgR7NSEkMe9REnUM1SwQUtzpHqy6twJFYXsr8xBjkgnWKWiR2YMxd8w5164Uw22Y",
  "key11": "2h7wwnoCajDKesQpzqVKg4FBRWcPftgn87pcgdBhyqKYAJ9ruF5YYcujnMaBBApoFe5tPDnjmvnbPcsszGM4ebCc",
  "key12": "5TeJCRKYfLEBeXRSuURpuQhGooRLGfr1S3fMhkABeaP8dF1TBZLxjmShXeG4j2ZjJRF7mCP1VLAjS5SRiufo17zF",
  "key13": "xJZXUzRYedsMV9ooapefbrrWrAYm1v5B18k9AJ5n28MG51PapfpnpEvsR1wdwnnr77PkKAer82MRjVcwgjBWmAG",
  "key14": "4eRTdt8C7dzJNTwDJBWcYj2wzLJnqnbYmLobVxyD1FTek4KTUnSPkDzxuScuSWaXmNabUopqoByhL5t81rKunKta",
  "key15": "3R2rM5jJS1a2spGv6mgUTaRmx1RHx4PXckbDrzM5sEKXDximGRiDKsd4AKRR8mCN32ZNe99rbHM4mrSLkzj1ZH26",
  "key16": "3MZxDcxqhCyXVteZgFHMoTZtrAKZaeWq5eWZGr3KFGrxneS5mhEYV9zmmrPfevNeuuVyaidtMHvEZgtgqRqKACyf",
  "key17": "5DpHB8SThsnynyaxxi5S3ihU9EWZFMzs4Gc2QJ2e2kTDv6arG3br8iSrtmWrCU5ThJafbfZDUP3Ux4H3ignR93hY",
  "key18": "3DRZGyLc2PUaykT6YoZFdD6rmRRivCMHstnQdvMkDYyotNmzyuao1a6C1oALZQGfZapDWV1v4LpWZwFFAYwv2yfF",
  "key19": "3UdDBg8bGk1qWEbfFevBzKpj3BtqBDuJFQf2ZsHseL2NgGv1GtHKvjvVKuEQAj83Svv5yuiQntXoSVTiyj9W7kE3",
  "key20": "58dazauBr5g3wLFiNXNo5AtP6Eb1uFqoWTs1ME7X9TLUp18cHZ9nzNEtVD2DMKKf28a2Mck2sbviQUt5ZvNHJJBV",
  "key21": "3JC5tbdeVjPPogAEBvkEwmp3qkzyosGkzTvpm9uxdPjSJ3SeHxBPRGP2YEGru36M7YWyqT8vrDz8nuAHqXWUFkx2",
  "key22": "5QwDn3BYs1raPnGd5bDxq3XjSmsU5RdRbHJshHwbTAK9anBYCMXiNB6rrcVFjHvVc131dqjS6B5gYHM7YBphaukB",
  "key23": "5ZHwSx8fH6umyNX14sqXpqHxfDCDSHjW97rHGYwxeMnBjV3vP9tSBLB6F6Po8L8dwG6BLKyrVcYn1VuSrTD5BRNm",
  "key24": "4hJXSAW2GjPPcdcyQ4mPTigpXcRMe8HARPdUAuKk35kZ9cDgqKZ6Dkstfio8trunh4RGwd9oZii9RDgw43CgKC7X",
  "key25": "2nG1Gf2qGCYTQ6zCcZ8SLxdjMHwLPQ1V1v6iBuJgxQKP2vqHSY5F9wAy6mFi2VESp29dJe4Gkbyz791s2tMeHGdP",
  "key26": "5cAJ7EvKizhaj4XemKGK5kXRnBAyTwcf2ZG9R5EnHnD3UoHV7EEG2V6VEgXpcrX5B68gf42wQ1uBoYJUJSmG1WLy"
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
