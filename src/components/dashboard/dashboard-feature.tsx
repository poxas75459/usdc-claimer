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
    "2Cermjy7Q4tC83mXT1cNGEkuVgkSZWW8okndwix1fVt9GVr2QPDyP9jMAJJuoZrTDbePyzsQwBCCiDwkb1yNMY53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zr8bsh3wbMTEbYEBr6GBqreaZv6YJxFeR7d8R6vKSJiEMU2Lfx5ZbQ7sBm37GuGMqZWLsmhQqys5AdZvkCS15Ur",
  "key1": "4xkQDuzjPwTEKJeSQD2WoWb65TcGjjoxBGTHXYzCB7TMAF9jELgYjorXzNNXjzfaB84cdtg2cyQiRFbXQxCjfwoS",
  "key2": "5DWmf5L1KpGocu4RX8DBnj7m8ZASbRfuxioq7Q78pfmQAvpeZF63s6fqHZ1ADLAcfB8VCRkSZH8LjJvWRitU574r",
  "key3": "3ABuuNUw157LLA6Ymwq6LtPNg31bN9xLciembRvYoidTtirS78EBvPatuAUGZTkFcqPuf9w9VRJXgCPvxNnkZiQN",
  "key4": "2cGNTknTNV4sKBW1fEkJD5jZU9H5gKog63FXGzM1Yc5Sp9Prw8apoAqwtzdksYCFKfyRc1eTkHo9ZsrD8Nxvywts",
  "key5": "2oKEgAUo17hmM7enf8QnQBxtqMdKiPMQFbQ4h7VhLmLqkLAWepYY8ybeWeBYbp8K3WQuRAkzrb1tQKPCMfDHXafw",
  "key6": "45mVCBw3KeM3Xz7yrdHhEtQrZhHBRNPrsPfSiXhYRawpJqnRFrfkq4n31cdNZtp5mRdBbskxERJDFxYaGZRvYNHK",
  "key7": "ZYu14hKMET9yi9y5rE2ztQWbnYx6K2NuvuVpaFkGd6gXLt591QBYTaWVNWwmHGFAtWmykPTnJEKb57hpPKaXvuU",
  "key8": "5rZKFBLBEDdeoLTVZo3hAJE5VAsGwDhuUb35dQg1YZ56YkPx46HDvCx6vLL5bZhWRbXTUKjEJxzSwC8NtX7By2S4",
  "key9": "3ELVGKGxtufZTR88TkcMRgfzfUqR1na6xaVjVHhiNcKvHkut5JUYbneyHPrNMvvrBvdcmRqCjzE5B9EpT4ayvDC3",
  "key10": "3vXQnJEvpZCMgNLKwAvFeQf9EPCtP3e2HTrKSCoo5aYBKYKedY2WY5HpKwGTyDDjcG932wH1mez391LQHJJZscfc",
  "key11": "3mj7xzNztBNCxLnXBmFCFgFHRMeGzxTPauCrzWA2EnXQ8PHG5zAsGMf7hUKN9Lu8Er3EhaoRPwndkVFBMkKCRwz7",
  "key12": "42QJDvjihPYki9VmCd2wnFqygCwhBUthGG8pGdCtigAfUAeXPY1UEVmURXkmSaexwuV98A8rTZw9QqTizhf5MKz4",
  "key13": "4QGWi8ppA7bJRW8zaWUhG18QtBUFzDXsv6vbHhqVsjSaA54qxiR573m29iqHysiZoyD8tAUcvfoeNNmMMmQ9A6aE",
  "key14": "3efgqCEjZmDNYCpHjZhwmCxYknRg6oLpvu8jnWGJ4mstzD4QV4VaFftRSS8DeA9yCLibRkScqw2Lp9LV3hSHZJX8",
  "key15": "4J6ghj2dPDUgrnodhQqWGCLgJ3hzjW9i6pJS1FRB3S7tc449kzQidPK6dFDTWTRiWTfLjE91v7eRC8eNMsSRjpPD",
  "key16": "42yRhkZ3JWb2XY5k4qRdH4QoR8BbF2qQeHTGGKKUN3XvjSXoAkxypRryKd3KSEghXMeioPraBaKvn5E2Z3mWozNS",
  "key17": "4PWYdGALSa9gU8TvnpnuKpHdpH4NzxAMhtqvdBDqxqwDsmZ8TSHUvAfuwwuvyLxtUgLuMg6zzjuVnLiuCTSbW17i",
  "key18": "4JwDv7mG4iSqzukoagV4idgjFrDoMnrXQ84W4zNvSsduFdaLa98q4RjxVhsgHtdsEnQcYFked94zzaWQktTTMxJK",
  "key19": "4Wv2nqymNsnfHzo6JtvFm8UZyk5HiPfBpLJcKY1zsw5m9JrkU4URV9v4CAhBNHefnPSaDdgw1XZGizrrcuggFWiy",
  "key20": "2NaxPKKmhfH9CkKdxh6EnGXAJfgCFNTBvArE7q25PoLujhaZpf3nQCZvxFR9sZ83cpQGUbRqwrbGeSogJ27wQYLe",
  "key21": "3k3UpnGss4rA6jKqMb3xBFeJEj7659tU3HyEZQ4rmxeEprEvBVRnY2k5UDfJxfPbpXrSP3hfvb6XCho2TpCpEvy2",
  "key22": "3SJudKHNF156wC22U7EeGjmXnZon2Hoi1bXWbSkwCbQ7VjmyRVekYpVrMUbyEv2nepQv93hrorQsEame6JzByCTt",
  "key23": "4vHyc3E7vTRH6gMANxP48Ums8nvpauJ77FVqcYXSK5miB1fL5HXxdYM4kWaXz1jnfbSt4XLTZvBYr49BQtZPf4Sk",
  "key24": "PcdvBLHU94cJjYEwcCat7ndpHh133fKid25HtMggghcJFu792TVMKmaSdGpoZgdUAbeb1YfP68Ghmz4BMAnRKfa",
  "key25": "5TaNRbZH5HhuriuMnvvtsjHJhzfpa9Q8NFNtphsBZ4KpHxgEHW8EzsnCBhJe59tJzGPb3qpKvisNXGbX9C4cQkDp",
  "key26": "5XR9nuEf3v9K7ErhNfBqwqcdrJyRz89QsQZCZF8PivPJ11KKrvNDmFrnza4rXaLF8z6wDpWh91sU4QbBu29ChmHm",
  "key27": "61ABjk1G5PVzffsMuQSUpe6XfFeVLQtvAKsZxedP42gRgAT1kJQRQYnwo6MD642ArxdrUXBPA1t7UQ5mYqpgse9E",
  "key28": "2DzxykAyAeYcwnrac6KC8fosj7rvrQND5YUJxAPgNYV7iu5eZvzYo5wgr3x6uDqdYXCj5aoNFtWMJVLuFp3RAfub",
  "key29": "5MJGp19ngbHmX6yQFYibq4nKo1CDvAZVADeK84rrxx53NvCvtixF4AEkULz3kvmW8a6e7wsqc5b1tnKGx1Sc2L2c",
  "key30": "3wXWGbXaqGFmsGJg73spNR52FrufKuMLSzMMNEvNR8MXx2W8cTtn4bTiGEHULM2W33DWY975S9FEbwrb8Wcu7htf",
  "key31": "2oxH38DiK4evzT1DrzmNKNsDF1j9SWq1tsNet3be1wfe7137Jv7sitxwHYUQFmFREwQvGToakmbrwbwJ5zy3224b",
  "key32": "5T8dvpcobLU7XvCn4EZQuV114vrc7Xma5B3d9PiY8sX78U1Rvukbg4PHYLspYd6PfCvLKbQRhusQJ7FqDosvTo8c"
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
