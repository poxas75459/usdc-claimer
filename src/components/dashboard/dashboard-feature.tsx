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
    "5zPX263nUFLfTGCxDt9Ya3Axwfucupvze4phE8hNWquabBgxs4ZezeXAVSjJZTmsNbvbV1AbWBkodnjK4c7MweQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krNkCXdLYf22FX4VioXwDcqhyMGUUJsnyMTZSsvJPwJUbftzjQKGpbxVKpb2213DSwDJX4GZfnU5AtytZfxu4KZ",
  "key1": "5cfauQyfUiah7gsXE9TA4okzT9YimQR8Ht3hcdbFdGUwiWykxgRDKeypP3gQTqzPNLUjjwGUF9yHqPmQ7rr1DFvZ",
  "key2": "38rjTHER4wbAQXU4zy4fQ73Jqb7W5pbhLDVzLnjQnVrC7QoFzFpdu1XTc1nEUvD1BYCy1xv5V67jtztUtXTDPkQo",
  "key3": "2C76Ej5emgDmejDfP7B5eKBrhG78frbzx6UaJXgdyX6oT4wtjS9DCXniYixTVwUWsi9ZULDLQ2CihmyyQbDFD3ZD",
  "key4": "5cH6FcZvbj6WGoP7juYLennfeEX9wNiLTn78X8qgUdi3cAbix6E9C3YdEKjPaYKCtLCJnFdSJfJNmrZQ1NNKqniw",
  "key5": "2UHdzJjsDhPZTNoeoWDz1RLpvtDmCY9dFeB5YDCjRUKGVZ1jabcQR87CRGCabj6QuAzg6GLDjyNFfRsZeeKzbKQh",
  "key6": "5i6XQSz9GND9yFRwpApXJYoL5LMUggTQ3co5wkWgTMNfDPdXovU3hdYfjvkGFtydSd9qT9shyEs32tyk4aNDRAMW",
  "key7": "5od69GjAJUi6u2PgvvrL9rW6DimNTfuxjTvcQFu3BY245NGdKam1hq2xhkeUc4xVUSiwq2ccRwf9LEoH9DvKuTgo",
  "key8": "52sCN2k7WKt4Vt8PHRkQ3u1L9hAZJoJADa3ghtCbHuLX7B1HGDAJ6zZuCnPWAowyShbYEfhz4bu8Jg9Kfuj3iuzu",
  "key9": "4MDeQdLhCyyKZ2VpVJpgHwZSJbjsesNWMNXqRvePd96LqvaMK6V5LKtFsgJVWo7GUKexZJNn4M71PgoSWPWWzh79",
  "key10": "4X2R4U8WQCaU6HZqY7qmER1svAqcFDH1nPAe44iyB5EyKrLzJ2S9L9ft7TwT8nHzfQRZWVSvim6o5ieg7RgaxFZJ",
  "key11": "xXAohwXqpk4Anu4nx8Yp8FbSPWXK8B47eJqKZRvCM4LJgNyySg7Y25A1CS4wbZeUYBE4qxhXQ24XAYyD2B2dMk1",
  "key12": "2vov74ZdzCnhWHK3BbfgTo6QfE2zm9p4GMSezJFE3vWwsmsiCT399GouAmmXr5C2oEBghbTofi5Qq9bsCAZw3ry6",
  "key13": "LN7ZoTJCdLYSpMhcd8GoX2bwA48xASLjgkV3evT2CtPRfgR55P8b7ewVdweAWKiit4Lm3tUWhcvfdbHVC23mzRz",
  "key14": "42xT7SRjuLyVgYw6DBc4QpoemRXCzzVa6ZQmZYJysySBJ95QirKYp4q9Vfr2wv8iiz38CWQ7kmaGMktL2xYryhZh",
  "key15": "4hTXqE89eD21EBYKEHveWP5WCmyysCY9y22eVP6cNkP8gJudx9USmCzK1EGpD3ZhxmWmQsiB7Kvp8b3tyXP71ipF",
  "key16": "2fPPijCRLb8qxwarfGuswTB3vaMeSmpvLezxaDv7SBSAeJK9eQsouB4rL38FGo9L7wxKz5DWj3wp7SBVLW2v9mks",
  "key17": "4tdmKwmoFQzJBvxXqtUEv9NXkZkQpoE1MJEUfrEQGnLuu3EdRfo17bWc1TV5Z7wg9Mf1bPEbUotJA147MLmwMUXM",
  "key18": "2wc1BMLmRpifewBzrbfAWYV6exoUzYecohoBeFPk1CWgtnMfKRkawD9EkWHks4VqrHJidVZZ76QJazcs56SaDfhE",
  "key19": "3ZSUNZv7B7ZmbCvUDJx5LSZy7LxX1NbP9H2eCiGCVugFHas4eH8j6bjnEUbTqa7do8471DKYkRPvNpj6MF53F9Fg",
  "key20": "4beGRYHidiXMBbuWqXxMB9mkXqvrMJZrSQ2ibU7yzeQM6VGyVtacJgRoVed3ugzUCquSekoXJ7DNA2YrXNoksUoV",
  "key21": "2bTM2MVfUSCVPqTSPZW6gXYwCUQuz7WPCUXSpffKXAkhMuckenojppKYFzVTXQcj3Hm9YwWbGG6JKT9JcQGTLh1o",
  "key22": "5psbZ7psRsmLs5xfrVKKomk8rs8HdmBcNfsVq3QNmoREsEPJdUWVx65XnQBSqtZs8w1HX782J3EzqgJfopP6ZFNY",
  "key23": "5U3vKzUdvcNWqNK68DVUTkhSk8f3rZ89Ts3KWN91XLrTtYUh7G9JyLmt9X1NEhN59KQTyrnDArhwTZRBehFBeKra",
  "key24": "4iyXGdnbxNemi7pFeVWWZB4UrkaUkVw1FzKRXVVgMeUd5yDu1GapsXHDanz4EYmaJhpjCUn1nZHfvpf9XVDzrZGH"
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
