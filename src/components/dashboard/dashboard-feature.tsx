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
    "4EwL8Lxe2j4VDwWw4KG5RaYV1wZ2EGJZiXb2AbTtvUQCsAF6oSnT5NmMjr8ryfXkTzhB4MHtwfioWoNCPjKs9wQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6S2j3Z765nit7rkgj9qQFdj41s6q6KUXWFuuiiZvoMv2PBMtzjqsFN6AiQ8Gj9wKKGUVnX8TW9ar7swAA6qUJw",
  "key1": "2AQvdgAixbPgNL5ncJqGSywDiFrVu3n2ryUtBA5F6ywSrA8ZUe37XPNaX7pFVhR7e1429EoyWK5T2MgUrFR7M13c",
  "key2": "4QhLFKDD42WZRhGPd5QXZedELXT6B2GkjML5tmZJq5oguKymFPRE4ENufXcWLANjUcA3j3a7G74poq2XBLuF9V8P",
  "key3": "4wypGQM4oc3h3iUEpGqgsxasx1xuHre4BCruNEV3A4aEtjAahEKVWoUvLSitFDbuUFfaBwW3mowGBXTnSDViEg7b",
  "key4": "4jA4bCHGyoW1X7x4SyhkJ4uL1r86wcureguMxakUUjqxr73344pRhvdujsgxmxbCDJMyrXhbdVkbRVW7raS5RHR1",
  "key5": "2KsdsjYUJmBe7c3opawU9GrFiTCqpcWY9eMxi4uxgiwTkeMED3Epac9JtNXumkbRpxFPoQHpZLftpm12Da99TMr",
  "key6": "2z5mZrMvnsTM6tmdFwNsfWCkS2WiUCtHRADTMtdq1FxoYuoGVjcdydaURxH7V5MtRDUZkEuwSmAkQ2BArcSGzBBD",
  "key7": "2BpUo184BhuATTYrMwfFMJUiJY6DE37LrzMeRNySeMt8vmUG9tUWGZ9wgdW1v3dqPC82p4k7uf6wi9RzUE8htRbx",
  "key8": "44XkhjYKqmjt8pCUmrFjDRbyNg86PvkfkhvJYoytGu4EVM8qzx9JScHZSA4hWk2EnQh3UBaZgHvnhAPQ6wTtHCtR",
  "key9": "y63hf8CbXhwL2MznhZvfx2vNdCDBhJqPakYwvC1W55u7eLrDKd56PCbGyKPsNTgnLwyn5rqrd55uRS3PFhVPKkW",
  "key10": "62oYVjASWnJQJKQcXMnfxD6oEWZ7coZUM7u3rAimL1WroYG7FoH11vcCzo2UUCDv2QoigKpLzUuyQW35zPdnasiF",
  "key11": "3zWzKD1UH669kKwZ2TAZz1E1K1VNEkeNqRYiNDx1smfWpMKhFUEJXCdRQjtxGteoghyAqrLCknSkmNXXozEYeG2C",
  "key12": "4J7c166aw1TzxN6zu4nMRLC9J83atYj94GQ7oTXNkxhcbW9PQHaHgCz4bruyiitGFA21XJBXshsibBebtTD9cDtb",
  "key13": "3P7St3TvJzCeiw6E2Wdj6zjP91P1zG1rNaMiyDA5moQMGt4XfZJJ9eYP7yHXdPZR8vDzy4VcudmdYVnxXBUeF17h",
  "key14": "3TJvNJdpCradbVhDGWjq4RdPECgpqz4u7kee1Quy2HNHkr5fS2xhjM4CAuMFqw4viaxK6Gi8dKvcbDhJbhoVQeBh",
  "key15": "5pz2nf22hKruUUKXuNHg6A6qacLpVVrFaCim1FB6nddT1dDuKx1KAsue78Gx9ZudPoznHFfx3TT15ziMQDQEyHaY",
  "key16": "3YYLXdN1vGZoReaP8FYL5MR1U87dyQhugV4Kti8Bvc1QS1BjTjzATjzYC47vahtyUg2LovmNM6WBHrf7SL3q1v9E",
  "key17": "5T3zNjWwK81uxBSYnboJt3EzPaf9tjYqCprobYLfuaKE34iJ5Ahf2WkRWBgn9mYXhbJmXbBJU4cCJK8P7xkmBsMa",
  "key18": "3fAknZMyjqiVFLVfe1vyiGLGnyiEgpNFMNumzvynciLAVajrxayCa2fVy8cQTHGGMZVsvyBRV9dc2ZMYx16bWsVf",
  "key19": "4jvBUwe7sNfUbnWSum5n674fAjATyu9Z66x41W6S52BpNch7UvYsWsxBMkiZgwXKi9bBiJFaiW892a76x2xB2WMr",
  "key20": "5s4YnMEkzJAkrKw3mLZcMN6cknXQfFkC3DUcUqboUySGbK35NeaqR8bitAP72mjW1cnALA6Kx2z8iLcZ9fzdkueV",
  "key21": "3NVQ45CmduwTPvNXPgoy17nxkDQZVUrvAVdrdWxPqM3KsK9ku9CsC8LTJJ6rnbzWoczpj3BtNWNsxQ64BsCBtF94",
  "key22": "3Q9DerXxosLgjDG3Teeg6CftYmwF2j2kM7dQmYTAobw1sWBEsq6iMoNAtSktSXNDSPP8q64q4CuawXikkNxx8wrx",
  "key23": "3e3qoEqBnxXrYHpN4ti4A2WdBiuvQujmDVGAQpdbG2dBVEc22sGZmn2TuxrJitZwGx23RrEWrco923vWTfpzQoYn",
  "key24": "4Qn5VpWKcYkYzfAT31yGXN2evqeqb6gfVjxSFXBAtR3s85sByRfvPKTt82Aknnc6gjBdo5rwYFbrq5DgDLe7msBe",
  "key25": "5siDJVPZ23PfwvKY6PLK6PAz4wdkVRUi9TeDmsirkWZ4DGLvtBmUMJK8826KctNDCCHzbMnhKxZatXBQCrCsnNv1",
  "key26": "29fReTFbGoo6isxA2yNLKup4smkqxs1TWhF9mQXRh59YfUjyFHFaCgtuVRAWBktY9QextqpB9LZp1LZpqL6cpBbE",
  "key27": "2WeN2dgg2sAymAyT3udhCF27rUhZHTzKrNNpRSKWdVfs63svTwX15qmDKLQSYFK2qakqJxod1ST9dkKQamK8ht9S",
  "key28": "2MmscCnhs3KTHY5YvR2jdnkhdNtmSuZzb3pEVvAu5QgAaJ2NDuUiiYrL5Qoysui9EcGGLX6dmegjHGrqaUHGMnGN",
  "key29": "3iqEZdZmPE1vFovudXcfjNUcwnbBcaYNeDrPVrMC24jfSTho9YuUznRjLr14MKPeUa9wyvKVxNkEqxLcivX3bty9"
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
