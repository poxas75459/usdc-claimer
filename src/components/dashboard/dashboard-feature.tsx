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
    "3TVgbnkKJ4P4dkfewqZa5zZfvFK3qiMhJLwqpr7Tt4t4ihNRQ3HZXssCM2xJX7cAZWueZVxsq4iq6BG849fY6TRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtBzXMjabwxFnHkxrW4rKbaPRJfsYzaQbMy9PfoXzqUPx2EnkK6EDJTz5rMxTnpCRCYXesLL7LtNd6hp9s2NADz",
  "key1": "4TttQX8mCjCqMyGgAAoynm5PHYa2QRgEAHYVeVcgUpKocYF2Wz3a9Gn3kUfNQWRQmQ2Gc6soBtM7cHiPNBcLLHko",
  "key2": "5XDXqarkcpQRyhoS6AhamFLTktfPKYegBakYNBjjKUinfrSrzrMkt6aCzshiHWCwYYUY4HVAMva9CXNiP6uUcbEQ",
  "key3": "4XD4MkYuJhuwKpFLnnsk3P4a7BaZihezn54FCtjJEEcRyoi8SbnABL4paM3RDKfgkXdyPpacjmeqcXnzo1Fm9J87",
  "key4": "rJNkNoDKU78Z9Hx92myuUbJ9dbZwVHsqRFDj7qw8EYskqLLj6syDwxqEzWjuWw2ukjyZhSMsTwi9pAgGU47Ef51",
  "key5": "4uqog2othXQFy5xcEoxN5sTJ3tv8BtSTGDA4DTKjh8wpQPsN5KRFeWJ38WNnCewKQGPswMSAqbxD13KJca558H7c",
  "key6": "39rQXG1T1Ea3JVLYdgpnzAMULnQyKGgHbwRxa64y9nmnopqxV7MgNt5TGVPjDRUqPhspzZAnUje8cnK8LohwXRgM",
  "key7": "4QoMiBota1DbDARvEs7wr7AKKPobrX36VKiUdUxDLQeJ62W69uZFqvwNKAdr8VCJLvN3skZ8jdTEDXGS4bmfxCPe",
  "key8": "4K2u9MZSp4busZC8iU5rjpEvoWSBNaqoDZhjejNfuudbEGqnzwztyRWUCd56X8tpWrgkL6T9NXxGY7sRpm53y2Jd",
  "key9": "iEaKxzFxyYajnbeV1xTpU4YuvqK2PVYzYqPqBAGh9t6QaEqr941V5HwJYUnxjvmaxtHTT7stHdWAjzBmuaPRAm1",
  "key10": "2FDV3zfEyXrgQmWwFJ87GJcVPfTMY3JC4mwfRq2HgrW2nd8ETN9F24gfx5kB4GbUZjT4juXBPjV4fFSrT7LCS6t8",
  "key11": "5Hq1gqLYdGap8vVQYEJsWWNDFfEVCyDu8NFoYjPpgXjPHCzU5759PCe56VSiq1csPQmMVqRs7f1sticCyZtNw9Vb",
  "key12": "3jhg3cqB1iH9vTMfk2kx3EFDHmBRPiJHS519aK3R7KV6EYMoYKZLEwVztzj3eCduhoTM5AFYZuVzmzk7NC2jevsn",
  "key13": "2ZnGLbCu1S54EKUGZ5tNxqTQYK39Th3p4xmyLetXpLx2hLkCfCcnMh7KimDZisr28qZYkVkt7ftBbmX8krdtp1HY",
  "key14": "3g7bkoVycNbGvPUveCqpU59iWpuH24oTWnkcgTdRXCcDa7J3DUTjeCJzqrBHrh262uKyF6PBRu6NoD7SnJBcB149",
  "key15": "3YQydX3FyMpEPsSEZBoqNVEpWhD7NXu4q7tQc9XzKMUQJbQNq4G16hAdWk1GJHSKsXkNxFFaPe6bseaeTEpAwunV",
  "key16": "RKk9c6z7ahgjawTQAKMKNAngfpoe7eGCy646sfTUm4smGS7RSgehjSKwLf7qYvcKzUsGUZh1akyZJFckrdqNs1a",
  "key17": "476uzHyoAg2HWLftMVsvnWjDDySnfZpnQqvdwySXjB9w6b9n358SnRUnecYQs4pS13E18MccdLk3Sh44eyZysbwE",
  "key18": "5dTDxnTg72W2KC25ufCLq2WNWQZAvv2AjDTsJwtC2r3DcnnWonfbDeJreTbX4xfbZSjiS6Di66SpUTFuMdhMN74",
  "key19": "T28DfGTbwR39nD1dtnsViaUwuPrMBeFaWxiTwBBVRRCFMaVSntZ6ifjMQ2Xt3cdqygqvh4QPZCLvGfksWDokM57",
  "key20": "4Q1B3HhN8C3n79cbws7j7HrUvxt1q4obk1cgVvawKNFAeUgmVTJDcWb8rS4YZE9H5rUqmcbsqAQAG1f7oi3vcwyi",
  "key21": "4SY6KeBdSohkHar1tsXy6RHfDo2EhRTqA9breK1j3gU2mWAqaBjcbEuUTCwaqC3ecDCMHqadeUFYMA9wm9TshWe4",
  "key22": "5F5oG2iMVMdUkru6foRvqFGArer78SQUooiCdohQas9yWiF26iP3cy4AiaGan1v2VR9929AQtes4d1d8mBoUiT6D",
  "key23": "3hEXQe1EqkBJWgqMqfXX5JfFAfdPnN563MkQDHr7JqAxMKQQRxm29QALozRP8WZV2fCSDaKU9LM2Jo1rSWghoh46",
  "key24": "2LtgxvDFXy35eW7afG9iSDSoy1LMW1eUru8q9fAzKtGs8NoFRiC1vR3rsiPEAcCcNdgo81kDv7evk6Amdqnd7NWT",
  "key25": "62Xt3o7aqDam3Gd3oTZE7y4T7STdNvYbfDgZxsd1FewXGMdvZSvpHNA7Tt3GNwThktTaqcSd9QLFL2J5ykf9f7y7",
  "key26": "3zg7SSYZdnLGzYQaqgkZGc59KLWu14KVrSe98Hhp5FdW7iZjAKZvA1qAAGz8hkmLvwZu3DZv43ZdxXJuanhKm5tu",
  "key27": "2dwJ8tXVSwzjYGawFb4KMqF1FqQpmvgNLL5mJavDDaF9SHQC9MLVwRbrd3aKXuCWDXDzn3T5BbEkh91D2BXMBkNi",
  "key28": "in9DYWtdY6BkZ69rhjSRtFU6ZC2YkqBB4J1AFc4ayySUrKpvNmk2gNdkFUfiuVqcymkVYzFDA9sLFUw5LNFyc9w",
  "key29": "LdnZa9LhGBEkLoEwCEa9EmgwmVAf5RD92Qzki5pDagofz9kZsNN48XdqKna73mDtn6ySUq6phYnUN9RvXZfd7Sn",
  "key30": "hit5LNXRYCC1MgXNrbJuue1nehxrCCgLnaXEtsYXvnrNMSHCuhU3i5CpAEbURNuoUhUVa2STmi2PJT5tymcH1iK",
  "key31": "5gui27pf193LTc7ytthcQTDjRrR1i8NoYtQwurTeKGDe6h5G8eZZdS3TTHdVtSSXVjF74DM5Yd4UsuUt2YvWhc84",
  "key32": "4YbtVCtPVAS3d16vAkSJJU1eQUQfgvi2s3Lavg53pk9NeFbDk7rbfnpnJ9PggMGeMq99x2VJ6hAtNNbGidSCWaDZ"
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
