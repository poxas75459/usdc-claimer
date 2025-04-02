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
    "AfAiSTH1KVL3jicJPW1wCAxeniPfYc94yK5yXYGE7iJTQ2n1CyuUghvJbwGqmsR6Kc5vUq47dhjABhpBS41WiCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fwnPNsAteB9oKQ5CHYUeJtRGFmdz7qDVwAKG4BP6hU32K4FQAVzy5p1YfjZJjMD8uUZYAfraBzp8jz1HVBXH8sQ",
  "key1": "2aTXryXwyPoBpfgx959AUvj66fe4eUMZb4Jkq22tWYKP1fueQSBwfggJXpixha6byZMU2bnqyPZQXj9HR6D7TYtF",
  "key2": "GdGRRdmxHk8XFkevEk2EYmUW4fvFdnzxrAMn3kQebG6KfrpN99eVkDcshSbFv11aDfZzxeJYeN5mHi6Pa8DbiUg",
  "key3": "4sJhLjsYRauN63QwVwnPEZ8z9HJiikS7Daw88af3vt7epnRdkUTnM3mSfJstGT3XK5pqC4YAbZK5ZGLaAAtAz2yq",
  "key4": "5TszXiJN6egtNN2qzuCRAaUBSd42UB2SNgPEKU5ADxZR7nfbSKrEyzyJAHyPkBKzPfDwWNJ2exm41LZfaanAs7kT",
  "key5": "3qam94StPoLgMo2Akkaf39AkQrxzur82Ufm4ZvXvBdbYtei4wrT6fXmiFMrwyC5RTfkmgg2mVGNf8reL3Zh2fxCa",
  "key6": "2vKLDgThw33yzY5bpdHuWBdagzRuz7DXFLGkT21M5u5TR8EqrxcdFhRnayC4cvNbnzj5NWvoN9b6VCAqhXVmy5PB",
  "key7": "2x2k3AXXJSHp1Kb7fhamNg7A3BHf5SPG1srhiqfqxSPYx4pytVaeveFj8AzZ2XTY2rB1hQmEUKL6if9d2MgoQ7ob",
  "key8": "5RC2BwPuuZiCXADkEEjWjobjqmrRjdfuWTsmeJLRtt7WV6d7FD5wKnqSHuz9UCtyuofN5n9ocHBU2hXDBi3byVVQ",
  "key9": "qhYwEQKqm4HnnnpGttiLjCSySkmJiRF2P8P1CHLvoyBPJVNoRCfNbSdAhebS5hBvDapfgCU5ZfztBRJenLvNAXN",
  "key10": "2x1b3CrSdmzYxw4SUUkvw2voxEFeZ4bMpGV92ra7ZVtwXCmdd5VCWXe2UdRjGUniZGpySHeLhqMwd9ASaxChkkEV",
  "key11": "5dnWJY2AtqdaQDtAWeTseUpmP22nR4PqzAo33NLpzqrWQEa1eRePR6ZeiJ16ztmJYdAhG5yoB2eZC9ch5QX1afNH",
  "key12": "5Qbi7HtqJ2Ay2HfH5aYbsXKjF1Eon4gi5vHZhsQgywk9dfkvGf5SRkC5bvmAMBNA6okPpcXoRwsGLjMJfzebyuLx",
  "key13": "4Gn8QjapHiQqyY31MxkXvyQ2nDTkdqMmGUAeXB8ySxmACcnTmu2itjBjk686uE48xvNdbrLs3orEMN2BWAUrBTyN",
  "key14": "3HiRvifux76i41m4PJHzyGGBzViEZqiWmFHm7zgxqKhWVfn6pjzyKS4fwcCu2aZPTPRcSmgjwAyaMgTpcYNV2sTP",
  "key15": "2bSWTUFjhmFf1mB9ADrhPivtYtyiqBkjPnodcZzqzr285RtdCXHo3fzLiaXukKro9sazSnocdA7MkG2ZxAdDwo6x",
  "key16": "3crELQwtnedCS4fV29GTDyUPoftdgagJLehF8Akzmv8T3aM8gkra5haPY2mAPz4jdBop3PUQsYjomjsqCw5fzeXE",
  "key17": "MCjDk96GybFN7SADcLgkid14z3ahpzgbf5yKhM7FdNL6gdiNBnPnZb9wzU9RFt7Ds4TuDAS8bizuR4FRtwAcsjs",
  "key18": "4toK1LvVgv7EXizPSRjZHe6ax9DPWRDxitcY4RC8CCLfZ7JVzbhUyCvVN2aCvETsqZRRFVSJcq1wWc5sDqhrnD8",
  "key19": "2i6hfcPTykjiorRUtMDpDfvBXnNzd8JTwXtvK74Sg1Fe5rGCSEAv2ec3TZwtsVrJy4zZC1XVDF7Zsy4zHPQ2Xm7",
  "key20": "39bhbE9NWeXoYybHHUfwVe8V8Reisx5ves2aiWNW3DbEopYnuuSXtHy4Tdo1TBhqmrBdQ699xFzVzaqrBJSrWRWf",
  "key21": "wAmL8j8CWey4UcNU6fYE2jXHJAiwcFd1BGjBbmEv9pzTHSaeZgBBRZUNt9Ph76tsRnF6pvnKd5YDYZNoGEsQwFs",
  "key22": "266nYTuUoUB75yq5EJwA5FWkFwBDBoskAeuLanhwSeyFLX5J54Gvg8LiFj9ELVSZ6tusrAZVGXb8QP9JwzHG87Rh",
  "key23": "59cK7eLwBqd3jNcEQJNYE8uHshVC2Yko8LWHokEXeD8HMAU1P731nbokfGuVKTrULfUyMoSTfTG1KwvdVra925jh",
  "key24": "3RZy71NpGvxBebkbu8KK4zLWV8GNyQ9sB1mqhAMER5pT14CWmiAhB3nZdCH9xMxB1Ujbv4so5sFRKzz7pavtBxRz",
  "key25": "fBFdJX75wBMuZYTmWF7jotgxa7DE8yZ1bGHx36YZVHGsEHkwVcZJJX8aKnz6L7eS11SPpwmHbMF6MdAkVCZJ8df",
  "key26": "376GWodd1j8eQVcRGsX9iZettHMnpLyUu7megWJwdcMn3PpEcU2XJ73iukuxqM6svUPsBHJaF3UCHGgmUuCqF3r7",
  "key27": "29Lv88YNodrVo3BsqjnWuVHP1Ucpu9KzZAGzHQQDqRStCWjn3yuuAsqCPM9kT82zADk7BmoaZDNztedpjswBHmF4",
  "key28": "2rsjYVU27A2Wzi9BEv9aF2k4zS1n88uqBSvbeEUrSxavkVrxwFu9eDMnVzxixUvvbj4GpioEwsZ8kgcJ5HyJA9oV"
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
