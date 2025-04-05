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
    "43a6fFhSRffEKtPVkGb837tVZ5KBhkWrDEMwQruV2Gikt7gEUHcLfxDTuyPbWTALBwhKJPH5TGgFGKKHD39TDNDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxTFnM4r7aZPFeTZykdU1u6JQRxqdnir6U2BpAJzx2poNzJXUQZDBf5YeVcTyDwHf6nGHDPffavLJq2wZ6Qrznu",
  "key1": "jv9YUogs1pkktZdxRCyG9HnQwC546mgbtq5tsiixQUiNZr21qdVsA79yYhoTVVz4S2dZTV8sFe9dPW6PfVjNm5N",
  "key2": "5h5mMWU4M2nYiZZgPqwV833xBiuvNivuJg5GXvKJK3dq7foUMwp4K1MP4chim7ivChfuCgn4NojWazaERJQNRHL8",
  "key3": "5qnNyUYHCfxYCmNxmjLqkM1NfoNogiXpMpAFqPMmmSAAHosm29uAghmnpF5W3BZvNRPe59BmTN6H8NsP2sKBcAMh",
  "key4": "2jLPJNXz5Bf3aep58Vu7DvcWCz5wsBVRZybP13CNpGoHCBPGBHmoussn1bAePjQ7QXQnmqaAMVK4T8uAp1sgPgTd",
  "key5": "3bMcc5WNwqWnooL6m3gCqYJDYAaet4PKQHbyZ8k9HM9tRcmEw8DwQt863SieQedyaMHK6VtuNmALJWD2CL3mH67t",
  "key6": "pa6ZALqbShqvZ8WkWNgEhnMRzucbJ99BTimrs7R1kxFJypCmdcib8uvkHnquv7PxaCYHfeJ2vjGkYFn4CqJvSRh",
  "key7": "V97cEba6EDhVxaMNJ46isKtLHtustnpSKYojzSBb2CtfSCNMXZrbsW1TsjW17Fyhy3tSWkDv5e3jiQZ4wovmhxh",
  "key8": "3bcL1WW5K9Tx6N6ugVX77JbaMYHVzJoaLtgYZahTKhGcp5bTWMrFsBmK3RMu6nYT6HYdNf7rRiKoKsXZH6hisSov",
  "key9": "38T4bkB7CuHjLMBQ9mhqsFdEzeFks1p8DS7xaHW5KFn4qFQ28TenHaxkkFPaG5mdiEWFmMaij8ADHrxopn9WuxK2",
  "key10": "Ko9zYNLxgevGj1iCyA2KbgFQMnXdqihiBgQqCHk3RiquiivEJJ3uXnpUrw7hq7vM8tGxVpdm6dSN92idAYjQNDS",
  "key11": "2CfVc1vJsgn76af4vQXaFKx1qAFQG2F9FVd4h2YixpRoTe6Nw1bbnbb9bEZA3QTMbL3sW6WrZJm3tx98YPfqU4rb",
  "key12": "4TogGVCmh3wQnxdkrS53ZBgb7JJ1b9WVxKNiYuaDtAbbm62sVbZyT2XLzAcJY5QQg3LFpjzoMZfGPGrDuKVk3msR",
  "key13": "GEVCuuoHzhFkqqsVtCwLbFTemrswfBdQXqxAA4vqdrHrY8poqY9ziPWcr7MK3gVowEJvzuQMFxPXkueVwpwVk76",
  "key14": "2PBhzhun69gFEUtG1xG9hSiP9rTD1fV4fDtia7hKX5cZDkZZtNEN5ue8DxhPCfajjsqkEmwuBEt4sGe8Nyq5N561",
  "key15": "4Qf1zNAiBavrCBxN8oMUTYZB8brMRo1pneuQJ1ueZBdYss4xFkdNqBosU1RcU2uA6qPksfjjjvFYYMNEekmJLq5w",
  "key16": "4ZX4F6Cked6boKUT9jBaWQWtgVNknMZuL4YtphDY5kwPiawTbottCMygMEzc4X6y4WZ6bGAJdM5DgWYH6BuU8hcV",
  "key17": "3WWZG8D6RQYpJ9aKYH1C83au3KjoTb8iKvKWSfJWmiFWRe6eracnAUKo5KWxWY3tCB64K3s1fRnJZkztSXFuppMn",
  "key18": "cTmftTMn3LSVM7q87iuUtxvPqhmRfbudryf7h5vUJG3s8DrkaEgTp4YvGdzJCCRtq2oDJGM6w3PKcmEppEWGtKb",
  "key19": "52t29AFBGYMouFGAPUF67bWVr7ARHLwqZmVYxZPTBBSMDm4PJnf8cAf5cq8oecwHw2K6Yz98yijdQZHPciotENci",
  "key20": "6427aGQBtHfaKkdaZpBmqitLmqTFS2TKHsqHxDbggd4sot2V11HThJDG4gqTvTnvFo3bF8haF4HA2FyMVm3jkWvJ",
  "key21": "652LPsbHhGZrDtTjnN8ajNRHBHMFSnqsSSF2zxv3hzHovSbYbjj1xKrUcDt8fpnfhjhZyx6bgwi4Tw9nfkoBNqMn",
  "key22": "64QUKNFFDVcgUMcXrpkfjdQxCRDBkeu4dJM9dk9cjdC4cAUEYohCkWcWX8waAUxu2NFveQm4gy57SdK71Ewdpxqa",
  "key23": "4GQxpHes9y5EcEkJDXyh2PeRTskatkSx8opmogmE3VyQtG1xKfTPWjADQW4rZZcon1BkC8zAAzfJUE34Q9WJBvQQ",
  "key24": "KQLk7k9uxsThcb8TuDLzQTtL9S5KUMv39TAmocbHc4P2PBCe3S77PeTzdJZv8LvxFDGqBEmZYrcDPxw664QeQ65"
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
