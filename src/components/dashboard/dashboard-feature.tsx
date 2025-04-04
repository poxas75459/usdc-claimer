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
    "2pa7xjgSkgzQcAVbADTZuwQeNHBbdNbaH9P7xGLkMmkPqJNUoVsEqMi1yuCTpEuBNCuECAXQQozwRYPJBAs14CHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECMWmCogkZ8nCYQ8DRH22d1DF6rQmvMrRdopHpxu15Ni2LfU1aYSWmEWpGQahnQS8quRx7TgiHP9dpqcuw8mtRv",
  "key1": "5RfRbw2NwNxbxRGdf51U9GRWJxmPotreApnyF4W878JES6SwhEFfMp2jBsUAYamJhqJWXxR8PQsRsowSXeAWsggA",
  "key2": "3SZWke6KDayMEktknCqeJaP4hKtw5jdSnKCKFpWVcc4wqC5B98jmA6KDLdk3a9UeFAL7otPUymDUf5EAFdUgnKoG",
  "key3": "4MD6dV8HVddW9BHjM22HkURqMw6T9z929wc2ZFAEgu4kk7BDEU2yTLzmXmagssBgeQZyC5z8FFBdSzxDH9PnWzp3",
  "key4": "5JQNo3iKA9SzXf33Ct6xDv65rS6yzLAy2mHNBnxJ7qnh2JL7zXFpepNCdaJ3JXZBxgj8bUNX8fkRVmKmiuxtuCiy",
  "key5": "65L4rXGGgfHUg8ncRvtttpxHyjTZv4fthWUtN49SLfCML1R6H3b6Fx9vpagWouBHQNncYPDFSN7Fyy6WTzBujTaM",
  "key6": "rke3knLdDP1dpJqZJKAPXLi8ZitJED36nqvAHdezBmJEttTKPA8zfwoY67bLp6b2QDtg7b8ZfRMFJqc13c74Cj3",
  "key7": "4brdzWBtnPfw8tzj1hBqSXAKDmgb7LStfeBCUYV9hUA5haRBT4pV4DsHQmMuysX8jGzMBTyuyz1sAARrACWTqhMq",
  "key8": "5nxaUsSTzG6WzL9Qu4vv2BcQ7ju6SgokZsscR5iFZYNokAvFg3JRQtr8cuftumUSL7VS1jMv2rXwkqWwye8VXmbG",
  "key9": "2WyGpCpU7b4VGtRutUeoxd6fqJfEZvhKv5f6SLNCogjV1eb8Tz55fqkQLHjPjfJVq6kFYPe83fe4ZBWaMyPkLRy",
  "key10": "JJ7TNr6eDr2g8toA9snh5BZbmG2ZBnE6nc2QoeHivDMWXQcqeHt7yjq769XHC8fBW864amcXHTwQ4pwTEfwY9GP",
  "key11": "4PovVmULkgj84rFLvFczrchhY1QVyShwoZPiKWYuf6a5f9wb8JUftUi26u3bVyCsVLtFbKCmomNaELFzBZSAAbYm",
  "key12": "vcEzvxkuU9zUuhAutENnQjvveDToPHkXBhpnQeDXnSKv3cPdXQZhHPBJ5YaRCBbypD7tk9xNAAJmsYBWqUDtEwr",
  "key13": "4bZrmsjPTQX3pYGeFUy2pdpKfH4i8JejJddytPQoaTQDLFtnStW8N2WPTqY23JseyZUxf9YYQxptdGWV852WGqBZ",
  "key14": "4yx7rzkaZ9WpZnNN89LNRq8dc6QZ4czxqAKJyP2tWF9ftK3r97PNEAZaZNYwv8NnnWj33RB5RpXg5x3s8ji2pEjW",
  "key15": "2yYPcih21ar3xRDteR7wroFJHC3SsZqgFXDEFxZEij79ZazhSzK2JMnKhzRkiA3873aMVHDNsPRA5UkUrMZW4Jsr",
  "key16": "4g8BeUnZ7RTVyePCkNHUf2mR1RH8fBD2rMD5g9PLnopvFX2aAnoDhBDTyWbotBsK1xUqt1k2aKVmEC4woov5yjEo",
  "key17": "5moi67SVZDUbkSz4yFoHonP4fCzVZEaLqV14tsRfbH6m99kg4MySxhxvXVeDYxmNMuMRaU2zQicHwvN26WBCs1kY",
  "key18": "3Ggs5bFwNiM1mQMZJMUEgtZBSid4GnHAccdHt4f4zJEBbj2RzFRVVbGrZLKUmeLzNnEyF42auhXaqNKy7xFiHLFR",
  "key19": "2Lthm4BZFr8wnUXN1iDULfKnQE5PJZBgjikkxTgLq3rKW6cVsdCDxshPW9PxaNcdbhQrYEvxVYuQsptSyC5sqezn",
  "key20": "2ed9xrcXBoiW4DHrUv6SfaxocZ8xNapLVHsKLA28HXTekXCR1dNDecmDpTCcipjURfL7AZN2HAHpWeyQbHuMwjYj",
  "key21": "xGo3Kcum3gTzrXCrA2xhVtz7kVdr6scPP1LPT2M3JgQCADsJxgdRPY4aibLWzTYhoFqDGoAm7tVxjmQQm9GBs5r",
  "key22": "5scqunUhx7sTf3dpds5yUfFxs4NfWMLjRnmcV84xJTpVUX93kGQfTRautZxJK9wiNgks5SHFj5nnXKbZQTYWAykE",
  "key23": "3fJYA9pVebgVTz46AKHe91iYup6EbYgpCuW1sRszMvJHjniiWwQsR1RGRoHxfWaa9GvpB9kJ7E7zTWTs8ZB5Z99M",
  "key24": "62GnvoDEJcipbao25ETawxYKTA5zABz7s9AfbonPwaQJFGAAbkA1xp7KVKg7vBWwo1bJf6ruMSGTDcQYBafa2pJK",
  "key25": "4Lcg1m3jbQdTQpCGRhSjEhersn2SDfjavytpRxWBSgfndZaAAZF4anJuUomiGwqvrY5pvE6VMesosHEhEtyhaYfi",
  "key26": "2Qb68X8u9Tnznh1c5ickR6A6vc1ThAwT8Qv4FHZt3WstEEXhir7JUdqPasdQFTQP5Hbc9Xoitp7qJZemnvbiwhtJ",
  "key27": "2a13QmJM6DqvY4BdqUT7zXZJErRiY5ummDsHmUC19BCDjaMWdZFFJeqAGyqjZiXx9R1DTFJLsWEWwzS4M8hgeSuT",
  "key28": "5rTPLYM9zy5GwKWyLZWMyDgFtBoVCnNhGkWPWpYj9M88KTsKwKgCTQ19pu84eGxzpy7EEFczdTuQ3MppUwWjZSUG",
  "key29": "43RVCbi7sEsWAWmdvoGFm9UpoCv7Be2PUvhRbsnUsv5uAAhhz8gSMLu53PHFeoLiTfihVyV5E4pQedZdXM8bmWEh",
  "key30": "3833PtBjAB6dd46E11n8ZJirw4XhrMVDRm8xmVMCL7fwm1H6ytaarHUTHPkgGMDVtNphxy8BuzJCHfcigUV4qtzQ",
  "key31": "5sY1ADJSaHUgvLoThrDH5sThRT1g2v34rhPBWSvsktphACgcmzDzrL1WXSebCBeBLpTQSi31gjryv4SD6A23JJWw"
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
