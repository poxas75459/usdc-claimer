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
    "52ZkxmF44su2vFxpjmw2MQjTfE56tRXXLJFQf5phCMEajd6fEpG1cSfH2QyGbsPon1Legzorh1xdyZJniJzoSrKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h12GkCDbXRcv35enq3TXAm6v7rj8rM4UpvaGGGaLFn3NqW9vXPq21JjmfXwZs7o6TCvr3A1H7HCHfXfspSsnL9V",
  "key1": "3S4h7nVDqfkAv4x3TBQiepTyHbp4nt7orBtwTwCvg1JtjXcCaWhsDQxpg9VsCYNSUDHsDsDN34DQs18W8VbbUmnZ",
  "key2": "45B6rsEPBeK8zbDJPfFBQmrXX5bvpiCZaAr2JvK2dxkUisJ7x9ZnffEQpVKKnRag1WLTKLVErgyPAFgWZ5MSMjBW",
  "key3": "3ijigxBv1iDPzZKtxg1hhBFCd9u9sdHugV14A9o83t81MphMZGwv1uXc3SNDvfWXjD4J2XSgFz3dMWtgRXZwrwEw",
  "key4": "2XpUHsS2Y55aL2CiGWstUZwB12gjb7CwE5R7XciD19HR6xWb7TATFf6HbpS3hxNncnh29TtqqFwK8Ax8fPhXNfVu",
  "key5": "rxrdYRaLgGawQ2sbZ2GS4pGMyUzxDXGYiu38xBSe87FW9Vg4aLriY5bFD56f2zUpvTnG6rzPqSGcnPdZzVLa9Un",
  "key6": "5pu1sRq5DDTBpSkY5JuLE8rUhgyo1stCg5rVULg9q71GRK6J6xsUCBAvi6A1hWNvEZabpXFvQ7ctCrcXwat95veg",
  "key7": "5M7WbKooV3o5H35UpAnCtWrwwAxfdkjVW2HdeTDyPXhNLtSxsAYXoWmpZtXDZVZJLpX1UpGqtvCHt62b8skzrt2E",
  "key8": "4V9m1EyY6d34zKQds7497s5jBrEwQKsj75kHgUVknpZgp7kh7prmfYWKt8zjLti2j6V2pQwYs5Egs3nDoEnNop8e",
  "key9": "2nP3h9rMyRZsH8wrJk8uo69vd8fphy1ZaWVRcZQjUuJq74SsB61YqpPm5Su426yUmf2f3hpantR631fFJM1A6Ucg",
  "key10": "YP37Nikavk5XhrwiXPs2rBuaWgSHdhtQgcK2bkXC78NiTY4ZoTAPbPS2tTKd3fs66rocd1dK5hr4C38qY3FBsYR",
  "key11": "5JZTbwT6z4pkpnMM1HopSzu2pLkQCRwUUftCyjpmto5c1geYRXouE6SU3QtqGnsVa5CLTHa2qk25C15no4mbMALo",
  "key12": "2675WBxekNsii61QKyTAawWdnHE7En7puFGBCq1KBfSf8r31X7cUcpSsNgAhYNjDd3z9sffcEsNGyukHoaLxfWR3",
  "key13": "5cQnUBWwfPbKYWzh9VAcuju9iL3jCDT4Z4FY14CUNMQkqWd5avy6aAvvH4STUEAMJpgJS6AQFbt9rWQAepjhDKny",
  "key14": "4izqB7CPoDUbTkT7jqD68FeDgsrVBqP61564whA4tLrCKeyjKs7qRwnbapewuhsFkiGF63uAQ6QSgfhJi1XLMewe",
  "key15": "5zs4WQ4tqfiU6G1GcnT26dMJfN8EWr2nRByAhewgytbUKKeUkx2wuk6ixQHkyA9o9U1gXQddEwUTYbCjobggbsH4",
  "key16": "3Nvx1GPxTnHiWMsuVMjvJsxu3TbeK2t1zJ169AjCPMU5TsPLJpbLC1KSXTG3mshKucMrFWtTNxr7QLLT2Tky6SQ",
  "key17": "4Vttj23nd75poT6xJ2h3Di6J4J9g3xQAtZTZwNnoNEAUdQL5o62aGT1j42CcsepHz1YL24eDUkZy2FzDbCyxpBg5",
  "key18": "RqR1gGyfX4qse3gymXoJ1LNsEYMe2HTrBQGmpURjjie3zjVUeeF8NB5Nz1SAkftMpzwffCSiHfpNhwDySnZUDGF",
  "key19": "3BEBmr1cnSp8CW8Uwux9sTruyb3nmEBa95AhdRnogRHSrsccentu2vWevRAcBTGyWvNTQRYE6UK8C5GHohGqTGro",
  "key20": "54pxn6Ypu2ojUN8Pf1SHmKurkX6CdXFwSFAeJULGnTZtG835Bj6smQvCJGksm4p6V3zgSrtza29mKPUosiapxQGJ",
  "key21": "BU8MUzqUzrL7fUNGuXRWnov9NUNhzTdXHWaFXU5nqgCpeX5NUXUB2H3i1tzFMJUd3SEL6FziMSEK4PJyMkhzqmb",
  "key22": "2XAhv6x9ttBw4a3sSs6qsnNTB1KZs3iRcprnXB1iSfp4SEjYF5PG3i4R33Wer1Xpn4xvHtL16tMHZSvTErWnemNW",
  "key23": "rqYtibsiYx5PaiVDscpTAc7XYjsBrtoHQZbxZBjFLMzgRAb8JFdUAwb32NbwogjABduurEciJQHRESFP8SXnGee",
  "key24": "4inadekGRrG7fTujTLRe8ZLbFbiYmr8FNVwgGHRpEqKG6r78CXcQmZV1oPdfzpPsNS3xSSTYCc14LuxbtN4VXsHn",
  "key25": "5wP29eoNdHJiXeRiHtwJ9rqzskq6LtNvytQ5G4FuFhwucNUgCqNdqp93fjArst133ZaStivsn4jJjZvDnBCpZgtp",
  "key26": "5QLx83desMoU1ueiMPstzsdWZgv85v58PX2NnCNfYQ5ft3k6XXFP6z4oW4biZMNfX5Zh54Gx7J9xw1vrJbast4JA",
  "key27": "2RNp7wZcbYkdMRCr9heZkoaKCHkFym4BQYs8bZtTFp9KMrD8xAGBhmA44TpstK51AChNFt6HvNCDGSabc5skK6VT",
  "key28": "2hhxVphBNt8r8ckJcnEwSq8FWwVm37quK4LqVQ1qVXjWZgQYYTodCaM1bjSnCJXw1kNX7LoMWPcBVLCyXcKkP28n",
  "key29": "23GU2zu6u6dLc1rvDM81aP4SCf9J1xQKz4jXDzw4c5XgMZDPeNwg1qaKjASJjH3snoqqLq2nw3mXdmAc3fJ2kwcv",
  "key30": "3Tvp148NpTJPqgUpxonEviNuU5ziGqySZUyTitwb91kKsojjgEuQM9q696CHyUyT1fFXt9mB97a2DzZ5MVbNVWkW",
  "key31": "DSq7NCDA3k1NqZdFCKA2WKsB12As1EQjyoJtwP2EuR8qSHG2ctHbDNiRPUd2uWpumSXpBkCBGwy8GY2exqRbxWf",
  "key32": "4j2ioZdAAMJWRxnqY92TnpiFUyUhHNYP537YkWwp2gfnsDi5AZeGy39hdz9ssekhKXWW2jrTDmpPpduxZyHP6azZ",
  "key33": "3uEt5vZ9efF2KHBPeor23ZtSxMtfkCnfEbDmKbV6H8hjWbAT5oTtM1F6p7yL5rH8Vv2JFgVEN9PQXEkTfgmKXK1n",
  "key34": "4Xajcy2PALyX7zArGBgiaHXL3W37X1669tjSiQ3tAWNLmQiT6WFkufRDU3j296M2sjvgya111qZ67VUgTjKojbLb",
  "key35": "4otvTYNiqXYPNp3tADSVn2dyK6LEmRfx5kz5zzNf6hxpAjf6dNbHwZn7P5oBhzSyM9KJkXtFi43Q8XPPjbyRcvbU"
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
