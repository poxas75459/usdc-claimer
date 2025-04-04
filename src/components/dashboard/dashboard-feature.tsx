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
    "55zmuovxzV4WheqrgVYH5TXG38aeRhYaf2xQ1T54fRKsXZHhguUQrcXK7apvfN5rXUsGsWg681A1E1WR5CjZZRdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5n1yxs9Bk6GNMecMv8G9NMEvT22PqBaqFigrQw2Rgx9qxqnhtrjerqEfyhbVwvxvr5bC7k2ZFryZXPhdf1oFLw",
  "key1": "4kmcCwqkg1yknvnDudGYZVbBoWr3DnPVKGAqzYP2rFk5pGkLiEiZ9156qjdcPFXNv2SXFaUXTmJFe5i4F9ptzfUD",
  "key2": "QfJkM2hMnoCSTuv1d8rcxkETySPd79wNw6mPQou7Jccvw2znAE1of7K9BFgmCqtcxZkH8p5a8ggrM6hLRwAUbKV",
  "key3": "22vbAqEHDHcq9aND9Bamk1F6Ch7FL1LZ4LrXsukTDutz1PVhz6vZzQ2J3xYJvATUjzFPfnpiQrQw41NEUvVU5mRr",
  "key4": "wvwWKhQdv95VNTj8oEQqyDmDiez4ywu8WFFHeXiKQxf8k55ABfQQ8fDbCz1qdMHWW4BWJ7eJCmS8EjL2RRa2bLo",
  "key5": "BLGjaZDBvRiMC97KKaz9ZrR3CUgnu3qiaoyb5cb4NQCu1bTiZgr2nYLUUuLwKZpcDiZmyRK1iHTBbDgwQ3B9jvB",
  "key6": "619om6LBYy66MDyLSeCeNPq1AuhgTjupQap6ZuwRJhe9XeM91t1phEGd3YXfxazC5d2PWxm8VLJ4CLrrTXok9rnn",
  "key7": "dqe2dUS4D1hezb5u1BQf9X2wK1YrdjQpGncjUFFTYBJhHxTeEHD6KExhYFLEti5SrMMUcFkrvcvWKQA8RvvNMAr",
  "key8": "2Vdsi8q1JcNCys7HFYtKrxYpmDffv7u3C8F9dP2ZZ2C984T4zyhAKHiPnwgrL5PkvKEeqyHQHe5Ve8xivLbnXYkY",
  "key9": "2YdCc7Yk6DxKUEFEuMyU7H5bXYrdxkp1k15ZSdbVMja45SunbttctsjyzsCQKpKXbnnDu6cC6jydhQjujZ5EBdBs",
  "key10": "5NjZ1soATtxUZwTpXzUGSkzMomayRUZurggpk6kSYpNLbB6MyzaKcaTzr7N1r69dSpydKk8cvYhhZuekuJf6UUN3",
  "key11": "4WUa8nXgZZvUBbjomjW3iC54L94RjU6ogtq9Bz5S9JoJr8N4B7NuuFcw9dyLmfQu3sYqAoAPLTynFNL9gVRn2WD3",
  "key12": "5QVv3M9JV2bP18C87fCn4KhPUMUHzpfTBkMF9ykHoyAvVXygXoDjoRUGHK5yDRSBqRaLVbQvWRyeGdGstXeABFLd",
  "key13": "4B8p2Ha3BSesjBzktkH1Y9h7zXMyzUTEMyZxfDdPnueuETZ3qowZFzhXqdB33J5uDEXbm9Qp1Gp821QEJTumiQ2r",
  "key14": "3PV1bTukEsBL7EHiB4uHn2u6f5eqktRmWTjfLxS93fofi3jbmip39RvxRoXkHa3mKKimuS3topQkcRKxXyBJTguL",
  "key15": "3S28RkLLdmcsELF26RgbKCnB7hmW2zszjA8EchhLwah4do4ZZ9k8nLvDGUvZZmMQEQhRrxxatUaDVGodugsYWFQt",
  "key16": "3yRaYWgwiWxv7nkKcJX15wFA8zdXe7GApVTXoXNFWnjTVSWCtBLdZM4wBtuEFqUM83FbsWWwaU62Av6Pr4h6QZNb",
  "key17": "66xgyN4AXx2D7rfvoaeQNxvLEoubeZ7Ket3XgnaeZ4gdiPVycPZGi64yE8ADssvpTyw9cCapZo2sGLPmiFjTSXGy",
  "key18": "3sJmR8jMi6sRXH4f6RmhqfeLwFCvG3zckrCyDUdBC6qxyN1ZSDMXVG6J3EfQKWA4gLZAThdmtWUqh2Uhm9bxPiTK",
  "key19": "3s8E3FpFYd6ySqtD7ruVqW1aFuDL1w77438K15BAcbBgRGRTFR23p47fcszrYd9Q6RK98E4dQYR6YRiarZamKHv9",
  "key20": "onzQYkgmUstvDmPqC6ZV7TZqRwhk1cTHqfYF9ja4kMGdZMFKzG1JyvXEi2mEp8PZDVqwnsBGmyrySGsSnVWbzpF",
  "key21": "4sLt9oMwNPmniCm9TArwGCPV8Xg5qAKm5hh5xGHZG3BkZrVRBgfZ7WBDgxpMJmtJboyg7pTnNwLwSewh6Ki3S1Yk",
  "key22": "9pr66CaKgtrJwfLYd8P47L5x9Rv5geXnmkZLntiqU7uUCM7fyntpuchyKj1WJfaakT2gTjkekwsaapW4DXn9VYR",
  "key23": "3iEDE762gekHpanoTbynbgSGVR2oBymVCSh8gAJ8oubNKJ8eVJqHv1RQXQR4Gv1VuquZAzhcJ31u2a3xqpa6Hbin",
  "key24": "2yE8QXGFq4g4dTX15KWoBd1nLMzXiRjVTJswGTUnisCKbYwcca9EfpmLy6vxZpme3p5c26z5HHLXaaAwBJPsgLkF",
  "key25": "3QRR35jR2qb526DQXUaTdrmMuaFQb8a3uX7RWRgUuawGmzEg8tZW9zRr7FYHAZJA1ktRxRwJ9xwUJsaeRevAQySk",
  "key26": "41RVDwKdb221Bfm156bfiuKZFNpd3p5N4wtsEqPbz5NxJ58Ub477pvJKaNViJeVzGWP4FGJcVdTVfQopyhbChnii",
  "key27": "3NwnvqvhD1X7WRWTvQt58pvARmrfXpr9z7hY1Mr4sawZuCFSPhPbEY67qHiTfmguwBGu4hxnYJHEBSvWYmNPzjQE",
  "key28": "JiNV4ds5hN8cqJtosLhnBS8mP2Q4NLKSVDTidDiyZ4Wdzebeh6nQuPn1rra1WN98j961r63hgqg7QtrRXmimxwr",
  "key29": "36owEvpGQRMCGaQRdeJhRW9zGZ1HZkwQa9at4KyrgLPkbzYDwGTDSaWNeJTDQMy3NgiGjGdzrVFyUZ6TpqgtE3LS",
  "key30": "2WzP44NPSBKdi5xwZKQrvzM47c65w3M9vF1ACX82qPt18VhXsSw9fpHQGWbTcsXaUDcMdD9p76xEmTiexWFsmPoS",
  "key31": "dXvbrJ1JQBcJutS2SusjwG3NbwkuRqnjNXhUA31qkri71zWECQtqhxBV3rFRjhs3q97VjCcPpyGbveWzon6Uwf3",
  "key32": "2wDzFMmEJtLcCxQ9GduW6AnUYmUu8e2FavoUaM4Kd2ifX7NPQckaxengUMVjR3skVQB8YPXVKBijdLLVZknVgD6A",
  "key33": "EQHAypiVSqxZcYumdX8362T6xB3sh1oqFG9XjfWX7suw3YrhZ4TK7SzaEFabgrmBKTFm4wnUF39ocuc9Rsw5Puy",
  "key34": "3eguGP8wSzrCobditjnESxkW1WJh6f8wX4qtKir5LAM7qTwf2BkCwX1QY6znizMtceYndnhgpbfKxQCbmqqBPh1",
  "key35": "3NW198SdqFp6Z63NXDWxd8ECcNGuz7mnUYVrY6hYwCraHZaEwPmE1Ud3wWcQigHGBD5NdXB1Rc1vsSj5kh2a1p4N",
  "key36": "2nQTgezs2jQgHQ1tXmDvVe3C5vynxy7cF994e4TxeeyRyf1NoMMP6tGG7vdNeTkrhTTCPntVv4HGZgtJ8i73iNzR",
  "key37": "5iLCwvBqTTJtTMCyNuU8d1FvhEzhuRhfzaAQzBDU4C7yyfYD82PN5Frscz2JU7cw6se7zrhAmXHyWDmYH4qqepwR",
  "key38": "2s7fT6iTiUtuiWADKMN4t92vo7gKh3L5GBsXCURQpTy5jnqNa116tmZVb2bZuJyExzQXEDCYvpU5Ki6iycjJTiaH",
  "key39": "4Ws5bhg6bMGRrMHvFTuCeTLK46rzL4qdjkpV4iAK8umDqe26cJDVdqcYjyifH3VTNKHsSFqi4Xv8s9gAW34dV8Xb",
  "key40": "4kAtDx7hGaTDNcH16g8rRV2Crc4s1RZyHusVBoqXcfpvAXAdpuxyS2WVjXXBR8eYMRCQYYwVdxahXSMQmK9QaTPK",
  "key41": "5F1cDsPUU1xXBdT58vXRH22XtEwuwufwsMMBDNRDhwx8nQTu7djQb5yxqwNrAVVX8wVnHvsRKjwcpML2iy2YzyHH",
  "key42": "5N9CykKnXKZ3sV6QSELidCsVBi3JotnqxuPu5v7J8NX8F6hMzjuPp7jrGF8vYwfeHTS4T53YP7kxpmkgc7Ew3gdo",
  "key43": "5gXAPrrYi62V6sNPZ7NNmxM9z6o4uXBW726NMU4Bqk81LC9JSh5QT8fqzC5QX8NnQsAo3wcUpQWwwwYz1S41B9xD",
  "key44": "3R2hdcoZDgaimnUDiHt5QosbEqExgqpyzybAAeS1GEYb8C43uz3JfrqoYvukXH2crkThDBNNv6NLzuyJwxJoQEbW",
  "key45": "5W7L9WPG45utQQKbqz3z8yKWd5Hv7fwr3ijdayYpGwWwYhQQEPpdNt9qBy34TLCTpSs56MxUhqfEjST795M5sKRB",
  "key46": "4n2xXRCNxstwddBZqDenGjLr3nPYp9RpXiUmub6JN2qGUN1XTycutm8h9QcGvKY8fhqCffaSN44YB4dcFY6ep1oV",
  "key47": "36zqTmpGTYg6shqLRjB9Cmucds9kPmYLbuAzAsP9avshfxquL2RcyuKiWQnNWvHGccKivMRJYPCHGGydMfQwDNxL",
  "key48": "63FpnDp4Qk7rK5X6dtSnLG6YC9oyuV5qAfp793gdoc73dX1HkR2pvSPm3TtC3vAjceUiRg6pJbhTA2rgYXRt1MwP",
  "key49": "2jYLi4HH1YEd1FE9qXFcc34tX4JoUTcxaFDywhYnuS7fv7D7PWMohUK1rHD8H6PVKuUqT3TikRv8EbiHP3gFSCRP"
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
