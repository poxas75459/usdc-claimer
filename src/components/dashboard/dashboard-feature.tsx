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
    "65JA4mL8povcX6t9NBXwtWNH7Skc2SfCLZzD4mTbxEjgyPndTW7noAK3YK55ZAidYqiaeD1f3wha6GLcHiUKkxLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouYzbGkXu9CcDYLgRLRpcqrTiG3Wm9P6ssHehLAU7vNdV8ot4orcEKPbgsqdhh3WpLUGHfuB3vCd5w2p4pyj93r",
  "key1": "2REz6TQYFmgCBwXWGd1AqRjsdoYRk8yYDmU2kdbdGUg1M8P2kroinX4u3HCYAFdcoKvLsCNBTw4en4YZvMJYPoLh",
  "key2": "5pWy3VQnMfsigGKSvRx1GNTxNgkXNeekmFJA4gj2ofu55uxYaRRzFe9BJkfkRXGgdp7KtQAujNZeHY6eCyLA1PdM",
  "key3": "3gc5NYTHjH9RgRrgBFasZpVkdC7LeZrvjcoPER89tDnc4kPmTvaZLxaqxq3ysFW3kgRyW33LmcWebRfwwZ6vhhAL",
  "key4": "4HvN4WwRJM8ZaGdUsiBktAFrc5wHGyGxFg4V4GxFxnejd5VwrSx1vRnaUH3qGYVQ9RfkXr33d5343DQrUBUsjCz1",
  "key5": "31mwcCUZbb2WsJgjYEnFQprch5ctz6mWGT5rsnrsw7ofrSNT5mM7FZHG1eMdZQbhgTVdwrxk6jVctpZ6H9bZr1QP",
  "key6": "YK4VeEdXCqogRVLkuFj7cRUWLfxT9DSkXnMw3zM6Cgtz1XvgGYcnNHwtmsuDWfFRiHriCrzwmdnaa8rm5FmKob6",
  "key7": "2CYVj7GMGmqyFy2Tdn4sb4wQ6ZiLSsJi1TsYdL6qrk5gsxsgxixACggiKzFhqKKvcXCuvhLoYZfGQoAS8hUAnfng",
  "key8": "ZSH94f3dcchjJwPCJypRLgMa5Caq8FygEUhUKgAjbjEmHz17EKN1o3quZxWwePuJ44hGHDyrUFEevZ1hXiwJtf8",
  "key9": "NWo8xEXiwASabytfKnYVTcH7x1PTwPJVNQg7SziGYXHveuGad6N2K5CT5Qe5rLJ2KHrNPPcRxzRHihAzVj69yBq",
  "key10": "5s41Dx8NCH7BKPQG9RBzmSSXtmz5YBMUJKtpZedcnEcdgHmKb88ZyhnMFNsJunYMUSitRQsZAoxHxEHxgHEigQsX",
  "key11": "3kMxRaBcXyBrQZewSdrudfgtE6fvnDGrVoWLmbEWTgfSEtDb258kKyXdFNLmaUqqKcd6h1KJQy6ZBhVULcrQCBbB",
  "key12": "MujTsv8fgxz87fwYyfqAUGz8ydUwRPBLSTSP2pN3jyjY4RhMZ4FwxxpCByS2KzPMnrLyusmhZJxNKE7h3pdeKk1",
  "key13": "3KYFn8tDs2HAKxx1wakgiFcceSpo9h8iA2w5k4ezicXHUYt5qAdDGk3vf2fjueczYy2yAx6Nca455cNz6bHHNwQ6",
  "key14": "52J2GgZJb8ZbSL1KNxqKqTMRSzQ8NVFnm4UrLoUr1eXr5MZaDoCFm5bytZvP85N69yZTF9TStu5YdJH9DxXQfSge",
  "key15": "5r6di6DkAEf5m17j2yF9pyydQgECzR4pmHgGrDJAnmpgQetkbBPYDZCPPvpb8QbYeCbBgi9nTNtS27Pg9ubwfQLU",
  "key16": "4PoMRaVM3Ws1kHLGNVPDJdd8SHqxmtREY9QuE7AVVuPippqiipykPEXi91o9dxxktbATFUFfSneEBoCEdpZoEaL",
  "key17": "232WXpQx7v5xFVct8y5fgigyg2xx1eJREiSLSVnGZs1a14k5bDgHj8vigXSvrZ4Ut6xbxYrsxpFKuwUZMGhcKDEB",
  "key18": "4Ad7dmjXkdR4ySoVXV6bhtqx8aXUuGahWc3Bx2Yp1pw2vzL4MndXEAXSAtfatwJ3ibMRP9XssAr61MziJnAeRyh8",
  "key19": "5qk31z1gRa5mpPweFojT4VXJFcFu7vFBoywEhWD8mkY9mQj5RWXNBTZtaUMHQBEsndi5GdfQPwQ5UdoZmrQRCHz7",
  "key20": "2SuN2A9ErXbNZn8p48nRY5mAB28JfrmkcigbzaZP34bXnpAPJdtDsaWcQnwDwvjANxEuSn3xfSKFC9EbuSzVTFy",
  "key21": "5Cup9hzeB4BYWwMw4LqZfBPmkgBJZypPrd8CZMyurFWGM3HgNZPmDmJTwsrRgjgkwwha8GSqtPjYtmvHYTUpwbEJ",
  "key22": "2AtDQRVce9h9fyiEZxj3o2WTFuKNqVZ8pGsJSE7MnXdBE2kPCzSvv2j3ju2ABFJCmQVMxDFg8FjDsd3PYpuZdayR",
  "key23": "odzrYpuVwSzbiu1VS4DK1GBcNtF5dbAytrE6fE5TGAssmDgqiSTvmdftFnCM9FG3TK2zT4G7rV9Fi2bkLFhJZiE",
  "key24": "EiC8vZ2JwMPJ2igmUQopvGpWFc7SktX3RVx46H2tpXzhSsUugR5PzxvFhizvr2oUCj93sGaKgi7aFp4PhVq7wmW",
  "key25": "4DBAFC3z4V7jDqGAGCxNkapKf72nML4Mu8Z177gVosj5MmBUeSijb2NMrLUyQFnT5gKs2ZH3jFkM39mU6QMxGNDP",
  "key26": "24ZVeooahppwYXqFuWfTTtkzJ45rdWqJbzurdBp9LWBCmuw5aTRDwpvEJsMqYNYLbEotHXD3CrauxdX5csUCx1xv"
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
