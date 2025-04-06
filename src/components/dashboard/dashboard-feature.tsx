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
    "5sS66qQ2NukbeJUqFdybeQWJNLBPaikCMFqqmWj6ovAwAzo2hcufpGjjUXsC9L6cS6Dq6BiU6jDAg2URd8nFCJii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhHxe6Lh9iSEj3Bfn2N62QuvAdMxKpjQP9QZGoTPg8vMLR3tgN5mSyCFXFsi6AweiBkLK3z97cDymcsN59yuRm3",
  "key1": "5faHUpUsdrXv58P6hY9z4jESgdZPCi9vVFv2nLaXPCa5uttf3FVTZkHD73ayRuGiFm9HC8iUi8oeU15X1XyTEi5m",
  "key2": "4k9xuFLDoheD4rnqzvpNZLH1XeJC1A6Tpox7ktznfokc1E4naGuk4X8UQFbVLRhYy9cwcFhic7KDkqu4EScdQVGv",
  "key3": "5cgucys3qEq9e1hPwFNrckj8SHsbY2S5UHTJJ54VaZfc8Yue2ubU8JWWoWdgPo7VQSPhPKh2txJNfYMqscUSxrM1",
  "key4": "5DaLEeQ7imUQgm7rHWteYeaLdmGL1oS61H3WXUDKCVtUxKNt85EZEcUVNXkFy84RNsunxniUeXQo9bsKCcNfhVD2",
  "key5": "4aK9Cu8voxXFUZdm8yhWypV6P6c9EaCzrEc5HhGP8TSXbbLsPYYDFAprNtHRuYiutpbcWX7toEHNLyVMtTeFncPh",
  "key6": "5UBgGYogtapcQnH3Dai1KnktV5qc167hsnD2qt9uDyLsPhpWmn9jsuzCZVds6P1eHBL8XS4MXadZ9bnu1txhy9xS",
  "key7": "2emtEPohwuG9i6vNeNvQMNTZQGF4NG8CwFr6Z5WD9bzCyqhjS3ham9eHx9kMbKpMUcZWzKpnbMmDutbKYRqYsY5r",
  "key8": "6oemTudtAE6jH7GtuT1RUfpBCZ6t4YCyRMtipeCtiUSNg95yG9MU2uk8BH9gBAT3BYFp3CDuyenwMRs2e4MSZzP",
  "key9": "3PvYVznsMsdLbwbdmSQZCwqWj5b6HfHQTh4yF34Pe8zkyMLZjB1DjNzffFHivoptBYik679YdWF4S42aRqrs6Kd4",
  "key10": "2Xt2DWWQWoSevqneD8LfadzPS6um1nMnZ1gRHrGCmeaNwhjMFFuGaRfsvKsV13bHZ5bVVNGhajZ5k51u8wL2dEHQ",
  "key11": "36x1UdcgrEENJQLALYmfZjXJiQ5r21nTpaTAHujTaVUtDQiGKstcrn3osDueXzwe9h86ddm6zK2tSiF7VUhMRBks",
  "key12": "5iDqFXu7q2dK3KcyqSSx1RYTRSTovt7H9XdYf5r7JnTn4EphyJh8DeYtc5avYZzHCivGrzmZ8AHXs1VarxavEqt9",
  "key13": "3MmXsEcxx5rbX5UinxDgCa4R3SYaQqhYCFK6fWrqGP1Xf3EWumuadJWAGEHUL4G1wNiMwvXBwhaH6QruUf2YkhbG",
  "key14": "3WG3PysJSYs3i8KCCRXYq4JzXuHAhNr3Nr5tY8Q1tJE6XvUeveURg7rC2f6f2itBgDzoXANJEqaRgMStLj2zSxJ8",
  "key15": "2zne84QrcUHAU5KAHyuhACZcboGQB3p1VMS4Sv7LWE9Pk9sB3VnL3f5978YfBgw3U14MS8DWdqSQSQ18sJGKyiFg",
  "key16": "4a9VBzSvKxfpdxjHjyC2K5cHfXnCEYvz589rVQTaKPhvcegmfsCmyrC3qa6s7mFtuHPEAhu6MBeRuuvHFuaUf5bn",
  "key17": "5R9nFaqMjNQTHt1sJCNmz5cuv3wQaFVVRLedvK6HMrrvoAuZPYmDX7bQdZSTdf4YYzNQYWuocR5FW7gXKzpdeWKp",
  "key18": "4kKRkMwDAJTiWkEJJWycB6C1Fx9JHTakDn5Xr1YZVSXNpgMJ25PdDrP12Gr3QpzDHQhhcqgznbKCUZMXi6Yvh7WR",
  "key19": "wjyH9rLVp6wmYwafZSA6c3tPE9oFQAuudc8S6DKQcdoHS1FhELN5s8t9WS8xHzaCW1iBdUFsw9g1SfjGR8z2bzu",
  "key20": "DB8QcJrHpPyKXdWmLzCwiNDWFTYT1bHbPZpExtfH3nVipbi62q8KqK7gZavHPeGtCyLMG5MFPNyPPpu3Hej8aMs",
  "key21": "38zFum8ocMAM46YkGEtLHQ9snGtidYseZGSZh2m7gyHo7Lw4W7dv3ZwwLjuBMBs3xqHwSa7uMK2siwutWwDnGr7G",
  "key22": "2ArqPhQmdacvYz2o4AXon3K5fZB3MaE8bYJMhvF7QH9tA4z6mq2U4NANabAKu4Q83iR8W6Tn53mJAmfxyPw65Dy5",
  "key23": "2HMwYsrbrCxP3tCQfjecPezHARmB2QmVYJncdpDWuFhgCzYbcEdshasdXEhehsX95Lb6ix76NZz7yiE5yF1zeK23",
  "key24": "3tPqXDPtH98pK7kjLo9yCJzgtot9wsrFZtURri8qBScQTQfcxjpxf1vP2ZxQ2jqErSmCstpvpvXSFehwFDY8AGgZ",
  "key25": "13TdZ8URF13sTdGqFJcNLpN8CArtidrx2vDrhcYvxKbLWd5zV3dLuaQwg8ssqCefqErXnMnyuyAfVQvc578rDSk"
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
