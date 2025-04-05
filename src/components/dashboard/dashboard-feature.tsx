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
    "4M6Bjv22Zg1ZgsisgabvKoaT1Eje29YkBoVQmhkdQz59EWXbrhpyPzSjVNuJD2LbwMUK7tQbC6wo6ftq9wpoFCBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HezxpNRMwBDq8dnYFhonJRcMZEYwBUGLMEL4BtcgqfSaNADa1NN1K4vkeiEsXDeUbV2btxmW6JkikPZgeh5rU3e",
  "key1": "3pz3KhxUtXeM2wghENo3Ft22uvnB44MCyW4eoUgXZEwM2bB6cmFE4ofkJBvCGZ4XrRfpSuHm22EFPGSXq67QuNjt",
  "key2": "5SEzhML1fcPkuNNoRSZnYTzDDVGWHuir7enfbVQismJSp3W1jppmBFZL3MVm7KE5sSqoHJoeCiRt1TrgYUkVkcLX",
  "key3": "2Ht3vnrzig8mizgnqxm14UDqB3ZHPSqPbdkaQriiDd9SykwcStFWaW2bUXS2ySwUepQfc4iLwrEX9oa4VEFyfKvw",
  "key4": "Gb8qGvmpMDdzzXM97C5SMrTsmdzMjLukjHpQqRqrZMP3nLwD1Rr9ciGsSrxfw3wuaDjzZvXbZahS8Gx7hp1WtWA",
  "key5": "1xFDsBjoseBAEoer6iL3LJ8VypR6j5ZfVfZv8dwduBosoUNJBbvPA81L9veD691gYrnasrnVUCgdpfMSKoH125A",
  "key6": "5fG127XhM5zYgh3o7zTeFET3ri9zYyHBji4Pu6qiSrdPbkRMTH9zA3Zwyh8VnYqoTfURH21zqLk6ouZCN2DikeJw",
  "key7": "5jtKhZ61mmT1kv2Yida5sJmPFctR1u8JQWRjPw4AacR9RSXTu6mHiahWiGZyWkP6MAtcyazVsNfyfthKrMuPhe8R",
  "key8": "v4ap5tnd3NTrnzkXAyCC1WE69KvrUHuACUHGWBY9vJgTXhtg9tUNhTBw2Jofjyzvb8BWfB5dbELNUB553pnLTQv",
  "key9": "mdf4MW3nzVGxZPDUrUQqkwTekZnjYSu9wF2gK5HGwA1sDWuR7BHGRZKE2ehApdQVcHRyHaZ7ww5epWX118sgh5t",
  "key10": "4bh3cQC9eZRB6PhGG9RGesJBwKboAfWDZE73JuVjrEnrE6vGtsGMpkS8o3frVteE9AYbn3GJ7Kj2BSFT7QgVQRWb",
  "key11": "5D9X8fc2utC2DWyP8BoABRv9uNWycdfPpQWoRDtWRbZdeim1BdJFZUDMLix54s1HnFQ4BysRaRzJPZhzQjzQBYYG",
  "key12": "4dE49y8mNvLrjgXRqHemDtKBCgfUprfYraeJbnnTK8YaAyX7r5mnABc3aBfm7GqWdQeRTMiMVePZC5rM8KNueacu",
  "key13": "2LMtzPtrNU4aRf9Jap6NVeunezzH3ShRFLL4NNudDCnEz4ub2EpFSKXLtG9unHvfALwtG8ucDPybLRqPFFD1r7mV",
  "key14": "jekhkZZ2R7JzaX9hEP8A6nyqSgpqHpsUuxqr7tUHXB6YBv6NStR8GpXkmbubiA5LqD2tSiQjx29PXf6tjq8FxjX",
  "key15": "35CjzxDJMKtMRjL5ht2hki76mv9W2o38TfqZZZszDAPyJrwEsvEmfPui6hkrgkFoUvcpbf3Ta11V3mfXGBvoR1wN",
  "key16": "2KfEBVNRfZAHNHYhRtJWmc4qVj943RHMywBFUmMdydW3RZCdGQmM3tSAhPth78Si2uDMeVWkZDuGJpckECzLSd5S",
  "key17": "4rUm15Wda11K4i7FJqWWWpXSFg66Xv6ojdgQMH4aLknn51XVRzGQkZMZiSQzHyD2iYCeXc4qWvUcDj8XJ4KzpSKH",
  "key18": "4GPhHGGt52G1m9GG7y1SRCBFjC2iaFLJNQYdu9tF9u2vLPVuyoRJD2eQnpZfXeCo92zRawcDdQeTQJyHH6NTUf4",
  "key19": "4SEHUTLcFRg6hYa1rPTfxutDLpDFbuTeJRfJub1JLwmarML2jXyKvSM6XMwm1GTm1YN7eSJDv2pSixQ2uBRqBqa1",
  "key20": "2W77gQ8Kg71sgbyU7khWWXNgnsfdzw4Si2nAJWgt95wrDjJQqfRFK6eA4FcRnmNkRLsC2BWLMpf2Dogvffmjuw92",
  "key21": "3mwHnx5viNTXLkz3g2s3WKhAwWGXmP9BWJuU2XFuYSWhL4cCPi5caSVSFdBW9eE8FtV3vqDJVvs337rYchPKJv8S",
  "key22": "41hwBmmtVc7wCGwC3Q6ifk7Ew2MJ3Ss5Tad4UipMBp9iHY2MBp14okK28VfcDUZNaw2MvBq13WooKA6TQqzvSd18",
  "key23": "tpfFHP3R37dECxKqHqDAs8upfGQWTsnx7DJdkUk5z37hKZCJBtAXxZ54eqBM6dWTfGu3qX8tTtgu3f4s1TSHRd6",
  "key24": "5kPmy3jQeNy3dPtDdkZNykFj3hbMXLqiGn3CNG2jmZfDEzz4YwRRTTZ7mt6NoWvXBBGbkRLgVmdPvdwoRU2JpoeY",
  "key25": "46nr1idWenQzrt4TAPKUzGXpGXQpDcr43yViEakHQ2JYr55TwJ8eH8bi6cUTJGTpaMfP1nTn1QK8KmWmVzgjvTv6"
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
