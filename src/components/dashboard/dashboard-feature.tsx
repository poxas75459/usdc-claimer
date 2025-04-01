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
    "4JzLEY5z1Dz1vqVq8JH7bjBCs77FtNVpx9nv5piLdhrHRYBA1Mx5aQH7iibYPE9zKRfzxWTCPYLrPBJGkgUmyerM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55EjwyfvzPXRg1sAjmLnHLvyEeefxtiVDDhAaGVkauGQYVuPd7zZYJMP3J6QwZ5MLGXTwUzbKtNJRdyqtbxDCbDy",
  "key1": "4XuqkmD7gNFJQ5pKAp5etAUpLo8wk7naWT8LZPe1UDepydBosCBUAxiQjJD14KAKTpKNqCvWB96jzpYwjinC3wsr",
  "key2": "4hzHm7FbTi1ZBXmW8nS36m5YeiJmiM2PZYuPnPtpGBac3m2QLQUAZ9FzxgLJqzEwUXFUULVKhgik6dLP4zfutY8X",
  "key3": "4zRxh9uTkavy9CuGptQqfSeAmPQ2YxrXFtasddPdmY6VcP26PVxvweKH1XswPQHJ1LeQPayq1wfsDCfVu4VxtDXp",
  "key4": "5K28Z2vKM9ytMUjSDygRRDGRdSmrEBmvuMXbZGY9aUNBC2fh3vn6r8e8KvukAXz9NxiCotgCTEqEw1rqqDPugVZo",
  "key5": "hXqbcFdoH6JcMqNvDir9AU4arGyWcob7ZzNzgwCzDYVToRXeLY7Zv7KF6uSHzSS68fzEY83Ai3zeerCuo7D3tjB",
  "key6": "2qXhEZqnBHWYZC3DcjG9vGdhusPvTJdSrbjFMVQGyCVvVfeuhMGBD3yQQ6hvu6DUUjyFfuv8Ug8hpHfw3WTSA5ns",
  "key7": "2abGCpQ6KjM47WhUNLHtdjmS3ffnDCPX4PdxvX7M8oT3VcmiJD5EAgSvWLqxuHJPBbmjS7oCdYtueoAZG4DwNyGR",
  "key8": "gLyuX5ZjCYYhwzyK4yHQdV3ZUb2dmxrsBFRU4LxvpJnZr16ceCPoVpKoFqHn7FWtx6giNScucAP1B5HzWUfQBsy",
  "key9": "2CmtpLh637tjCAr7enmCeEYWfGJariCpiqJzfF2PdMFMgtrjqtqUou9s7qucQ1yczzyMQ6hv3AAGqzq7CKnUKyDd",
  "key10": "4ACRKQ5cbBknc2P6tqQaFkCRvhXauvmyE54q4f1MbXVGtb5yn2wGGvHoi49jzaKhPhqxJXvzxdQyWjxfgJct21sn",
  "key11": "3xNCNaZFvVhJNc6D1cYjxfm1ZTMyeKp9mC16VbdB7Aac8S2ehWEjuPcF4GojUJY8jqRFPK9hYWTBLSFUgujNtEHL",
  "key12": "5zjpzEVJaByXpDAGomBsw8k6uS18wPJgAa9Xd9kG7YD2vsXF5rsZ9ANjAo32VwcenXFptAXLd2RcTCMLDG6QNvzp",
  "key13": "4do6fMZks5QTZyqqTATkxx9dViPu9vXkjLnPpEuiqrdeDdwNSCzy3vQvNzbjv8yFeoieP92Uq7wvoEUaWsiLMMcP",
  "key14": "2gTkRXtJ4di5e7sUit3eKQjZA8WYruPYRDndRwy3hXvodnuFMebGJBDRkqw9KrDw9je6KLwgedQRCWS2xUtpy78i",
  "key15": "4uUVntBz2E2y8A6ugYsL4VSyuCRBob6R42ZPYkS6WEtnMHWwddw5R8N2ZUu5NmkMTVJZqM9A2Bzj8R9awG4cFKtU",
  "key16": "4Nt6fcoeLauDa8aESEPRLeMvBFSgvgnuAZDTZGzKUFvdgRzU6pt5gtocLipfmAgLpiG968bzeKJCdCZTTG1cYKWr",
  "key17": "2LCjhaM9b3T4gdFviEG3qeQmzhKY7zymk8HhX9DR5m7NH4N32HtqnhWKavSbqwkxgfCY1cUYpGUZV4tU6Gm2bTTj",
  "key18": "42RBjuWL4Wv5Mam6XKDvhsnhSE1BzYcX37m1zzNHcFXbw3eXugraz6EwMihA1VFGJk4JSZ779rBHAcAMuqd9frVQ",
  "key19": "2nCYUL3hrtnFrZXh4KM1yjkQ6rNoGzN4tM8c1iNRfrMdWqJbRBXNMJ9xLZWCSrHoMHeh1xmPxCe2VTGEhr7A3rUu",
  "key20": "32fSo2Eo5i9qTSPTzuwuLE4He2R9rMbfJmb8Ka7e3oncS6RPreqaGSUTZ9mbAqTjYdh2FqbJbGQvDqoUWaWzG5Hb",
  "key21": "y8jhgoijAF81sG5THPsZ75zQYXiYztoH8rBsdAtLjwiJjcyrLraCRWhSPPMmkheMx7MaAMkJFLrosyWz6FEVLuB",
  "key22": "4PBekXjMHJcHzPAg83hjRam4t7WXeDZaW4Sc3kq5fRiw8b6UVbFqMPfFKrcoL3w6Pdv2p7J7hA8dhQFMfZDLUZ7o",
  "key23": "iV9Ns6BnCYcxeRWasvLZwWbMvEYAE2DvDK45YuQkRLPDcsdfom3ZPaNKthdNcCppKRXHNLqgumRA4SRuTAEYjWp",
  "key24": "27cQStVq3EwFaVRq3JfRrSFudtWam4nRkMZxPqPbDQDBfPt2vLh8YURYRzYioXn6bMbAh3mneHTPUCCq6ha5jMTU",
  "key25": "3gfksvDm3bQ9EkY48iq8TTWtyG1gpdFoVWuDugv17Ugip8B6xj72BLTnuVofHDLi4SUyt3oNSoigajUFYfUyQYx7",
  "key26": "234rpw23eHmNVYxSbtrLNQHL7wBUdZWGXti3Uz2py3D3boX5dcLvFYDLCupDKYVHgcURS9jZsB3GVbiHHEL5do1i"
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
