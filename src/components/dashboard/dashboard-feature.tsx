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
    "2SJYwqyA1NqVShea3sRBywGM6UD3ZwLMtCzr6DgoNww9FV3bNazHY61iUofCekafk9YSqgkFCPJgJrCSfJK3SqaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNv663hap8iiAUUXcJPS92C4udBrnworWL3zmJs7xSRcBZNiBPvaqAabAvqEFeDrpAEY3Vtxmc2BaxVd9bD3n1C",
  "key1": "4PAb9H6PYmg6r3mLGvzP2VqHos49equDw2AZYzswp9s1zPnjk99JBTJ7JHouZaRqLjSj238K7WqwKyzfUhr1uDF7",
  "key2": "633X1sVsbY6aRvkJGYu2mGc9WdEneb9FVGssAykKsmqs5tCpERXzbZxzB8mNVXgc98kiRbCoPJcX9S1qGwtvGJEP",
  "key3": "vyYHjsoMmfEe2w6MbdrvNh6FJKvv6PowbedakUik5xRwYgBHf8baGAUHb97ewH3cRFzSnUJGrrQmjTFPHNgznqn",
  "key4": "5sndFkP4QPWeUgtKBZEZmPH6bgRj7w8TgKoRYa41FgpDKrnzyXCA21k9wDjwwa2oyxmrmHrdQeACykpZYj4JAiqm",
  "key5": "2S4stc59WZ85YoaAi8sKtKS41od9ezsLMgn4xcGdgBCjaMR9dxif4n5zcJvoDsXmBovAn6pjenb8Hp4SvMgp55B9",
  "key6": "2F8Ud74NWjqmc3MKKXE3XPvFGfSggLn6zdJ3PeFQdVztmGd4ZPSsdxDJeF6oRQRK8GfW4QzpHLHKS6v8vn6TnbQa",
  "key7": "7rtDergrE1acyXP1YLq4ZsDedyBzhYcjuKdeJjeANAUd8ciPzM32zvRA3UnxfzdnhfCir8gxyQtQ627qS4ZMwMd",
  "key8": "4xvEtqiNsw5vag2HD2acXPwah55k8egzNR5eT8UfKBt2R6w68TMB2ESNxH5A6q3ytjjq1AtRtY2NjeBUi4jsqSsd",
  "key9": "476iHvZsxW2CejhrEYRQCZGLY1u9MpLw2JpY9orBAQVduqM6CAqzU1m74iEZugP8ABKeyDz1EwBC4J4Yxc2zE5s6",
  "key10": "N3oPEuE7wRWbcyYixhcYW6RHYSu1akSksY5k9afQg3138hepijyw3aZHExJfpcYgXFXVtyQFpEPXNAtTcpp8RHh",
  "key11": "2CifDmu6epXqQNwUMWrN7fnnTBFEpzvUFaW4uDBxiyUqiJxbY2y7BBTjN6CUP4nvnTC4BtAej5dUREtJ83rPW7Di",
  "key12": "3jbLJ7h65ofuFtcXT3d8PTvmz1rA88bcmQY3WMEB89fu6F8NXSzREFhmLP8Efs3VvpVFmrrzftVCqx9jZJwVhLxN",
  "key13": "612WbBSX2FkQjPt9roouGaMGUb3paQoZGn2Sv6zUDY2rTLG3krYurJD9Vb6b2CgsnJfzfkN5ZxxD5iRUUfTYQUUR",
  "key14": "2cbfeWpsyhMXYDY572fN1ih7ZboKh5ocFYvXh6iRFHUMfivq6h353HfPgC86zd8rGMA5zYWySAKM6JYSRA2cf6qR",
  "key15": "36pkebPgoKmwVzRpJGmLRB6hCcoVHzbHZhBjxNU7Bj5mVUE2nYkRRtoppDQhwBdqYFB5zARTd6PogMjPL8voHThe",
  "key16": "qf93yFV92nqpERkG6RpjW9wNGbDGPbjMy9SvCHaZezEoPEKhNAaNmwEhvZ7wwnqiazWvPnD63bmgesiU4CcWVTa",
  "key17": "33ixC3dD5HNjLusPqcQHYe7AcT5CGC4Y1CBJrxgHwLxMfobBWoHXETm4TY7dVVdpkS9MpVhExJgkcEfEFgyRMkhq",
  "key18": "289RmB4LbeoRXpxYcsgajTM2rdBLiFdu1GSBU4fqhUdHu8Si6LQBP4XGND86vjfsJ2DFUjr16f7Xm7Kir1oWhDW3",
  "key19": "4prbhx2t2iZXMa9vsqfQWfWQ6UCzG2PgokKCSLYHW4oYVwy5L454f6pSp4mWTcbnNP5RtZkMrUF8a8bkGRjB7zkD",
  "key20": "2KepiNSwkdfAain5C6aQGmivgP2eL2qCB2yYFdpW3muiMaMvN1HVNzvC4dmCidH2SsuQwyKhXpnrpDtyNcxYXER9",
  "key21": "4S2GiTrPScgf65yc5gVGTisXTDxd47TrEoGQhMuFiLuFfiLbLSU9GdsiZRYvgVQ45fVvtAaFdP5vcM7SBL68QDR5",
  "key22": "V9xncPFrBaKFYLyH3YrT3vLBB8C4QzNiyPNxiHwQcymps3mySi5m83y83m6RmRkLwZ3UwvFVm9fRNiN1nRxoEZq",
  "key23": "5oQ3JEu88k1PLxXtysdcdNW9sCPFaTPPodqMsNXGb1HnH4sCRDehNyPWzTXxqq1pHDhfadLXsLVBbSMLpALLv2eX",
  "key24": "2n3c2NXAXbF9kcPbu5T4BCttaF523eVzSUUdnWTpAQuJ9EmsZt6dEcu6mHomenc4XccoSbj9GD7zwUH2pzhDY8aj",
  "key25": "5T5H3sRUUCibV8VvWPsm5moaNJs5W6YDYUx9xE5RWvteCdXHkNtNWCS16P7cJCcaouyuA4MCYwUugifhDbU7Ti1W",
  "key26": "5vrcX8ETys5oXP6sFW3KrU1NChXNxMRzwZ3DGfHu5tsCF4s16f9FN6V8Ld53sxaRbzHje9FHbdNwYNszY9Su7gqC",
  "key27": "4yGqDAAGJZ2xek4fHMg7pzf2BAspiphRyyEf3X23KrPW1g2JWz16T2gf1CijkaV7zPEMD27stos9qqQJ5Wqm3juw"
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
