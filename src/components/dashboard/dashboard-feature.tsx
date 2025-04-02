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
    "3gturctEzQSVb9e2DePd54p71ywg5faTtFJiLGnZu3wERk9uN3YYQ8F7QSytcHUv7pYpH6VwyxKLQzPvQDJteT6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xy44JKbGMFwuqaCrDcaYYtbU5XbzQUniYerR4cHW38M4MLXajfrKuHx3gvo9zetF49Mgodn64wWkfLQ1DFm1xFU",
  "key1": "3uMQdxGTipmSrGW7HXPCExa1pNEGLPqcnEWcqyqpkPHpajrkcXg4txdK8YijthbR2puxpgcxncxZvgqUvzSw7irx",
  "key2": "4FSuCmkRvbE8TkdWg6uTCRburirUbHAH3kcVwPjns5r2Ax6dSW256GpeTGTpmmkqQ3vH6XWmDjB13fBQev2MHBef",
  "key3": "TCmMAkyu9rzBWE3KifKAvdWqQ7R2nt2kzDTDzQcSGU7eK8mbXhdgYJv93eF1xn7NgcwuwE762oyea5DE4ynVcEM",
  "key4": "39PaS3UG7DhQ1ysi8DdFx4XWZ1osLckSyWEP3nUkdnsoMMvs51sFkGjeA4zE5YviCvB4cZKjX4RnkJJpvJnp3DzG",
  "key5": "4xEAsw8xgKAKh5KKJQyggAsXyuMJ18a41z97sBeFq3APybraxKDcjMPRWfiPGPzUemBx9SeZWyXPXinz6DgWUigT",
  "key6": "2zhTxWigW1PKxh8LPqTu7eEdimVsqHyEHQLAxyJuqSJZesK8Ba6fTazWAn7o4LniewD9ygW1JzTohFnKxbjUR2T2",
  "key7": "5mULGB4QBZGoA2d4piSs5uwHFM1TDKdoFLypv2PJ5RhgWm75Br7qmm7PtsBow1MUP2k46dL6S2rB8S4ayRf2QSua",
  "key8": "2dUnaGpKuUdBrqrqKa2N3BkztWYGUdRjdjXJJw4fNjrhcwU9YWr6cxAoYN4zH1AJ5LDQRuR53PXiZ6uGCwxRg877",
  "key9": "Ufo2Y34Zybr9e1hACFeqH13qbrvmyedrbsCTMjep2tDQeQEBd394yLH67cmHfavou9s79uBGGUzTmiuNG7nnitw",
  "key10": "3YsuMJAk1NLDApsTtbyXLq33WpwCruQhJbLmnALgoYZ8LdhrHZTyABcQH9gH3AgM3qCLRxPkEbaHZJ1dqyx8qUxu",
  "key11": "26pcjvMUMS8NDYgJThn1CgdWrEC1U9k9mpNBjnEiw9dUu7Mf2A4urxLkSKhGZRk8uqKGQBMNzxtvzvTscmpsB5XP",
  "key12": "4y164bjEqjZvcnb9FgKVPjr2aiKrwqy9cRhuEWWD7jFtZBdHJKzAUxQ8ba3619VU7jK913PecDULRje6DtkvVmLj",
  "key13": "5vHyQVM76wtKAHU1YBFq2gZSSot2QtDo4GfYBWwjxWdxv5EVua4FrCBN4iRNeULsisiPdA1yF1h3HHoFPjgjBrbQ",
  "key14": "4bcoNeBcRrYwX4joBHYSyDYG1BW5nzHvhSS51fKXC6dHVmcejpJBSRe6DS4jUrRML796cewCbnwGPX6173gUdbRW",
  "key15": "52KRuX3Vspo9HijhPywFpAVtR8nbbfSz5cu3TGgRCiK23pEpfVBSEzxgQeJTtsUkCi4EEEGUtDfm5N8KpbWMogVC",
  "key16": "5fHuWpUN5qZHh4rzcxdM229NZUTzKLfMBxyVoWe8Hky8cpDzmV5SWdZLbvAYcqn8X7XwiiRpySPsDRQXywvBMpHc",
  "key17": "4LD93Daad8KYm5iZNCJkNC3NxNXRqYzHPYRMrsJ6BEzWUG7akLWFgj6kajokiyeFArZAGUWBqfLofEPbqio1ZWVf",
  "key18": "5oUr6irbFzAzbczaFSR7DAVA63sUfmw8cxKf2NuGQ44FwQysPvS8Pyteg1vvsrGuLnk6LFKLznVLkc2o9VWKEqQP",
  "key19": "5t8rUN7hfjLTnhUkvVWFU98zr8VW83jVTeaQ4VT9URZWJ6Whz55Htb4qExPq25vpWsL6uszsei9iVKEJiNGtfjoU",
  "key20": "2Daxv4zC47XxnNiRQAeWTRcwenrLZWMDh5sbTvoneoKHWC1KFzyypQ2WMPDaobctX4Bv8Jey4yt9vMFBcfkfCC6v",
  "key21": "52PphkpNyvXvtpmWBsGvbPduMAyHZigXHuoitjtoQe6aA4LqPM932BRncwfPdya9ATkaFpyDzjQvJm3GXBssdrM2",
  "key22": "3bwHBcbhtEMjPE4TF9TtqkPVch9Yr6YL7eMVeucu6BtzStmTbppicMrvSh354txM7Pckca26hbhdr2GwRxeVetzM",
  "key23": "4WquTLRVd61iGfS8ZeviJs8SQ2Q3szu95HwR55pE9T3bCuMshUDQVJexaak6a4QhyvJ7ZqwvfYZZc9aJErnNGpjj",
  "key24": "45RWdKiiwDcCdmX3rYJYjmJc93yitZFNacKN8PWH2WK9M5Q8833x2t24rBoFoR51VpqwHivTodyMrbbxrrX3Rrmu",
  "key25": "3KVniukpEeCXybEB3iX8ea3us2nrbdVn7eAVVWZEgbaapY2whpUThSkiSzxmwNLNvHXCBMUY4YzD6zoy1QuJZXmW",
  "key26": "3SrSW2AjFHdoZJGTFwiA4x7xefHRK1Kr1LJJfET3fRRSASnE2quKruNiVnZnd7nrUVF3DBVReJepH2migi5456Pk"
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
