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
    "3ZorqBoLQher6uqMytzwFjMvuGDDNCB2VPNABRDANQa2MfqpCWisgXr4yYKBQo5WuWvdjG1YhG9xSCCKyWC3YSDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3MXLHgit4tyhsr18BqT6UdEyQ7CQTUrtaw6YWdoND8UCTDXyNRLa42x6GFiasNraf9MYsk2bbnVfpimvtUeid9",
  "key1": "5q9gmxTowmjzc1ydLjXNQ6qRGSFf6kqkPpuV7Xuf9RZ9xusn4wGQ2Jz1nE6LUQgmZe4nmnXWp98n8Mwb3GhMKuDV",
  "key2": "3rpFSvvHAMTwTu4qeGvD6U9UaZLLtXrEsDR1JwtMLtVNX9rL3LSAJwcHPfpCVM4bH4SfbNpAaw5pCu1YhZYwQaoK",
  "key3": "5rXNHWzZMt6iKrsd2e7jiPmLgnSew3h88GNN1v3PGP1HYLC3yDm6xHYxmfqiam2J82CAwakgh8Sw2V3HMPxkjkwN",
  "key4": "61gXW3dYaBU94ADmMY2sZ1VmPAK8J6nqvWbJWKVa532FJMgD1ir3SaD5C6qMsSm7UGWDpj2y1SAZGcEn9g9aDS3x",
  "key5": "5ALTBgq7un5KyCAea4bhbjStR8skJhvnrniiPQHPnyj1xAqZu9SA7gUGU83hM2ovpbShFZEzFnRUarjMS76awiWL",
  "key6": "ncbhWfWXZ42nbtW8G3fhQK2pZ2fg3eRnmrQCUqjqzqVaarQ8trqmxuFEdboenKFuE8iaXxyKDyCHMPcPcdajgdn",
  "key7": "M6SX6Z62nUVvesWdxTyC2VV2YjdaoKxKntseduWSjMwF6dHP86anBEky7rjNXCyTyGCSb7vpnRAvvQd1YTProRy",
  "key8": "AxRDUpjKYhFHUCf2ti5QsB1HKsfJYdM8ruVyX54Wmhd4MHLm1xNs6qdADHZRsqQvFTzsaJAFaotLTNaGBptx27N",
  "key9": "2qok7pA4et2MjsGLa2ydmB6PzcFTsEuTLon5tTMjKKaaBK7bocSRJHYoZeZsJvKuWyPQMNzNvevSiqpkfp6FqVnA",
  "key10": "3nyijqXCHZ5XpfDJvi8FvZC9jnC5erQKtWxUoqWpdVVqC2f21hWVjCU9iMdxfPzJxe4Tx2WhBgjJpZevLRPafWCr",
  "key11": "4X8aNuQnb4oUDdgm1E1xEubZW6wP4M6iZ9JR6U7NTKLeFQPPcrvc82eUccDnoMCJgVDNUXjUHS5Wm2w2CuMN2wcu",
  "key12": "47BDS7aPwtAftg59XnpKoXMuDn3nuXhsLTAkkBhbv52FafX9GLzin3Bzj2XPnuRV7TcomswYT5vZEdfgwysWk2Kh",
  "key13": "5yKH34NUo4WH6Z7c1hUXgRLJKQBPCDsxgNTmA98iywzFfg3DfsYHshptWZ8oAgEnpN6VGN18EyKtnaLZrEHVUYfM",
  "key14": "2UYaPQXYzozbAUsJBhHbgSFz7i6iCfuw4FHfaEQuJskunYnGPfuWTFc2RAypgE7P6PmhxHwcsMP885NshFfqyh2B",
  "key15": "2uY8aypDfxBVozrypA8wzYmhYNJB7mt7hrRWpse1bQXZMbJzfSYoB3Wzd7nEvaSyjWHbGHtawRFMEk3xPcHCw42k",
  "key16": "3gWX6cQj3aFkeugX8Qo4HBPtu1Ro7wxZ5kR2CWVFVR4Z3ZJoNLZtaezoy7MBkT4uuCqQFY9uGbT9sdZXoyfFphC1",
  "key17": "4XhhW9xEGpYzFQP5oK7QmU9FQQV78pQQJGthREZUDBbeNGnFPhMjcQgXpu6BGaExQr7ag2zaQaHUL6wsQnm6r5Ms",
  "key18": "3crm9ZgcR3Gr5PT8gaPF7A7mrrCoXi8cJPpfLJemcGfZnM6TQjPt8hLY8zTe71rTTHm5Nq2ZoLGPC2A2TZfanVv4",
  "key19": "KcZXLE8UhZCnvJisuttQHbaS45dGnMuxbQKmgH8NGmVjaRdcQS22XbYc6NGt64BdJ1XLbYv9HLPy4GXiranrLjB",
  "key20": "26G6hosUcdbePFYXah2ComFHH7zQWr6D1FfLGf1v9dNs5LYQ6mAuwdbPZyE4ZwL6TQTeGnoGxa1A6LH29NsApxiw",
  "key21": "631SrGJBbgsBT8XmAegtZfmJPf4XxaWgKTJY32pb1VLPDzRLwPsQ1GLNCbwJ1yzbFdYMSgWRo9X4ShyUaE8y44rn",
  "key22": "VCdY54oyH9hmnhQZQZsAK1sjyBQhBYWHXPNeD2SmV2XsQrh3EcU3fjgX8goLUHRKwKcK2bBXm4kRkr3mPEwdgXQ",
  "key23": "29kMV4sUnasK1J4nm1wjEcApKH6C2NLmHoYA3DfGc2WSvzoWH5QnU4z2QbdpDosLHb5GBaZVRfFKojRdFfW63Wpp",
  "key24": "3hcKfTZvX2su7jSb2M6njgpDpzCU1mr9KnKWedxFRHxgfzkHCJ1erbCxXxdZNJU8pm8wwNSbufLV5c8UgdBegc5S",
  "key25": "5DRvDgi5YJ9TNeqpnDvsFZjeEw4WpGtFDbCYb3w3VFe42tDMfHPS25RhDY96i3caAQV2cEDC1zuWJG55vT15T5Bd",
  "key26": "4sKrN2usRrJFHEkEMNvNCR8cGNN12waj6jZuL215GEZkTZLttCTotrSwrKhBFrebCgAewN6wp3pvVLNeHB3ZPJso",
  "key27": "PwZdqESENbGF33vf8a4WtkYQq7eA48NGUR49akj83nN5efucWmkirgqbJKS5uhrqdgf5FMmthoYYHehM9itE7Vh",
  "key28": "2VwA2QRPgsnCNxF8mNU6bhRqUwiVERWXBwcFnt85gtru8RQhhhbegPfs8JEQpWpLtYR77Tgyr4aWLRiKhtE9QLVL",
  "key29": "RqNETCmZAnQ9sc6csCj4DU2ymcKRFbBF86P3e3PNYPFSHKmjPujNxsF7W8MWH6EkYuBXj7bQHfJuqumcru1v6fj",
  "key30": "2tnFf6pNntyyNeLynaubk7B5ZjK5W8ibrCiMQHdrA21ARe21nxohtC59Z7eAgFx4qGQDwG3dunarRN9JENjeZDtw",
  "key31": "3MAJAsYgHDVvziZijbWtGXF6h9zGt6Ut6yCYwzow88kWgt12ggCUCiYSLog9ys1Mtr1qNZ1N5DisKumbJuSU7az3"
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
