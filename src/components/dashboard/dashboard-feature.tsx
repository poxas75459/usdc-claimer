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
    "36UswDdTmxspthamLYy8zR6G4jDuP6pi9BEqbfhTMkH749JmhFhbURs86DgnwSxNr7TrARR88Kf2aMJKVFwfyD34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aR69QCG8KCiHo4USaF2v9za6BznraEq4usbXGoeWshcusKzFp1ZhisCNKPPMuHec54D6cAia7HXWNHkA1Sontyb",
  "key1": "3QZUniB9WDuDvfjhq51U1K4Zo7peus4WacdEj3cGMNq7eqY4eqk3LuWd8PXPnji5hLY3iDUyjRg41WbngefntBGp",
  "key2": "5dSutp76GSg8aCA2aDDU3vB3oW7zFCpuP5iymXiT48uAMvMhRTYD123xxURCFBNMtm7nsFvqmt5BzNjcihMTVWJj",
  "key3": "6ptHpyGr7a7yP7cu4VdjJcewZFWjD4FoVVbfBPBRH469zCwafefYJGars6C2vckoUCHHx9wFCzTgCjnLmfuMAss",
  "key4": "4y5AdkGwFwED6tQuZvmM4Lc7ywXJB4ExoLBSnGeVxo1CxEujGWNN8SrUs8wGizxTBi4NDwseA9F2dGGVZegnG4t9",
  "key5": "3uph2E3Z5Z9DGf5GtMyty6FTHx6sbNCVjDHqamzwJFweWYumtoejspUMNd2nfPDk2pw4JCswZSUELFtZ5JvubZCn",
  "key6": "2qfRrHRrLGTj8d6kkqKdLkX3egCXcknuJRdVsK6mAmVU6ErCwACKZ92mmoakPH8twwKBhjv1EwgscpjY3ToEEMJK",
  "key7": "4DokRg8cgi8qf4UTwjk8E9zaE3rik5WGcsdRziTai6NPA1ZEfLLhCnue5dXcazq1MaXgxziu2nQXqzwkhSsG2szS",
  "key8": "3Uay7igbgpCpsyKZsQ5wxUWA12AvyTtFkLnjn2sP5Y7cdotLYRCCxFcikZ6Q8Gy6B4brSrzPF6hCTXwNkvYcBERd",
  "key9": "4hGtRwELubWkpEampmfNamW7LSMcNMq1Yw5tVoTqnkYXPYdxNumj8gQPMCr1VTx9PswTaLb7wEFo4xUPabmrjY5G",
  "key10": "3EVnF9ZxDB9H6Ltkpj9qLnkLpAgBoFuNLsLEdCHMWRQbpNV689ViNiE12H48AgmmXXwnvMFxDKDTqLCo29eoxoPi",
  "key11": "5gPzijXQzzekav1L2KDP1EHKGyHJjFzeYeSBtR8X8DhyWVWGWu6M7YFyYruvfTxQbR74znRZKT6q2jun2Pbu2Wi2",
  "key12": "3CxrkwDPcwjB2iCm8Pi9FgapasAo8ABj56iBiGW3dzdemQ8SGpsHinGg8TTe2taJYjRgr3k3zsG73Arnx1uavnLo",
  "key13": "5Bi1Gbq9gNY2HznjJHcdLyMUiWeXs4V8AVgyFJfWDiUhEEH1R9hXhiRnKKsejTmc7FwJcwwUsN93AL33sJDWRTvA",
  "key14": "2NGJPcokcrGiTADbSjtAgWkTd9KfryebqoDXmbrrp3d6i4bd1JNckhbYkhFfeGrj6933Laf3jUZUHAygievApMQG",
  "key15": "5k7gJ7e4YLh9MxXfzUx4fNc66L8AL1h4UG5E7p17EnaUAGrn2JHdvLR8BGUVWWqC83dnqW5RqXrs1absxzQmXRHu",
  "key16": "22nYwoAE47x3saBtBjfJnRjkfPh1Dpa8hnGKjmnMUQnRCNzPSVW6Fx6FkuLR4an42GFM9NiahEbSpZtsNHgq15aE",
  "key17": "4UnP9KZ5KCrrt5HYb9u4xqHMe7aG2rQZmXTGhqBJB9pn26KLhaE6QhZnkNCKZAwXDFXA2QktZ4kb1RLdPDSfZbP",
  "key18": "HWstNG8FE15sNEPzfL3iCie3DjG6PV6oZCnZHgsJZLsPgevhhoN6cgW3yB5UogBUSXkCddetcjfBrf9R65PbStC",
  "key19": "27mafcmc4abDQ1NNmy4qjWCNmVUk9Y8uxmUqV86yNsEKxckLQ1dT8kq58QKvcatbULgp2Ein6wmGzuvo1XfZ9MXj",
  "key20": "4ko2Eacx5JGHPvCD721XzPaUnxfDces4DqXUSKzC5zzQFkBVmET1veRUaSmPNb8W93rAvaBwRHUXKBRJ2hprk8WZ",
  "key21": "sjFxJmFirLxqXRQAdBidism3AgVpAY8xoWrEHZmzWVWJi1t7hgeJejjcMQVrmgXQ1JRcS4mwKPijMkcLV5eCvr2",
  "key22": "52jfFaaTzyfh8uL85WYQxJWqkTAUUXoDEBAg3AYH5hPPBW3qaKJd18dGH4pT11cu3mQV8fi4ZwWtpLcmMnohuZMn",
  "key23": "3tVQT4PXFToniUAoy63nndj9P4z9haDjKUYxDYcmRBAKvZNLdTeoEfnnV9CkD4xkZvb7m74Qwz3x4F5hEjp2m5mZ",
  "key24": "q2CsLHToYq6HYMeceewjtr4LobA41t9N6WeA5fAJtyN2WbMxLxZkiYgymwkWU9fUjidYGR98FewPUz9hLauZCtN"
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
