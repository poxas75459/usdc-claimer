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
    "27sKAnUR3ZzJeGJLN9a7LvfUKe61DB1MPQ5nE26PrdGGM9uZM5rjqyB7AZfoWzxPdino2xDQPFzFzNRRo453hHEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgRcRWUEPVaeZD8dpKUaCTiCuVdVB8vMq12QHEZrvsrmmCG24ZvaSGy9CWbpbV5vmGkx7eNca19oAGo3au8Jn3a",
  "key1": "3iynysAj1RRgFKqjrjAHz23WnptB73zQNk6buwkouF6nerLG2dzM7sZZPjsMcLurWo4hkUrb4SSTpB9aZWAeeJ9A",
  "key2": "5TqJdj6jDcV1Q7VrtHzZ2wPzKhdtbdzpuCcSnxpNL1jWPPW2RgDvABJNP8VYNFzTnXGX9cLjFhEa1rSxa4V4DsBH",
  "key3": "3gJkqkSgej8KAuYLDwKARjG3ya3SKKZc9VWiUCm4Cpbk6LZseg4rh8oabFZMkXUevwCvtxuyNAMgUfjzamNPbe1h",
  "key4": "59Sk1Xd7GfnXj2FNKaeNwCnk1nERcFJBuJQ5BiLN1ibnYv5GSEgz7mueCewqkEjpccDbN5vZFRpCpD6adjNsp9td",
  "key5": "5JK3rkty9We1zCThCLa6xrT77qNG1jpELh1yo8CUPSqZfVKUwQwNQfdMrYEKTinNreS5LgbYovSjAwXwW4rRuHyQ",
  "key6": "58jDNTBXStogyAm3dSsgWgRiGftR8trTuJw35aJGB3jSJ5TDPyasgNurxjr16i4AdCX48ZX5yFeEKb2uDSmDacAZ",
  "key7": "5kHAVeweyv5qLDZvFZyPkRAa6XzDowrjz7NsWBEUyUF8qXFH6c5MfGvRkcx2UTJXGTeg42BbbyMucwW6uVhx3NXJ",
  "key8": "3F6iewH9PCPMuMik3NGwnMuFMyjv18HQjn1U8pXpygpU6MFVFERvW5EE5W7xLNyLpAw2X4wbhWiHXC9HWuboqxoj",
  "key9": "D4zU9THP9X8BiU1xJcxajCZHV9Lq4y5AgYWjXcaF2WUPJ366TusB1X2Gnu3uDNXNwKYEHy3sb1sJ1PY7E59RUbB",
  "key10": "3nXfq7PYBQTFH5L4auq8qUHqFja4sVXeV5GZ6dXN1aktV36x2wv6YFiJB6zA1thPpWRx1GChWfoTSHoXSCpr38ng",
  "key11": "dVKx6XkTUKGzHWZH7GbFpr5yYXPTTLrjRWoo3VgCpYAdmjDyC2fUnMLGqGJoEtyUXcSgWm1PTfcMBegvbU3EpKE",
  "key12": "4kcmh9dgXiD759qR3iWQR9J6gYoLBUx32xdi6xp5rhocKbADNzea8dnqjWfx1Nc73cfcN1szhdXSdhMcXJQCjLQz",
  "key13": "4C1HhMuS3XW1HhGiPH3BLgqSqonhJq3T55fFtFvUBkDHY9MXF2xwngn1ppXtBM4JdPavHcTHPLURQwk6qVoNtLTu",
  "key14": "4JqfTKASg5h37UW5cGtc5X8VX12LpLgHQmTH31FMQhn9hdkbpzcEaD4AiDaKVaCsc5NPJXdHEY41CPZukT19zaV7",
  "key15": "2XbxUkC27oiNBNtuH2fDUauHqHVV76wxnnC2f4p3zXZbGR8cFehmhiezV2H31HYVddWquvXe7E6BLerEHdWERYTi",
  "key16": "3KMAXM1cdPos7GBaDhb7DU5oXhG7Un2sMq221PZneFCboBCi638cve2QdLv487NhHUf8r8m43o2PwNQ5wdpFGX8q",
  "key17": "2DeB4zBdUa575ruCG1Y86Q2Phngz3ETT2KeUXagerJRezTRG5eUWpQYeSiWDKVbkN2z4NGTenSAh7jdsiksvCsfL",
  "key18": "4LymfUy6jX89XAHo1isAZBosT7acRzDXJ4AcUmvGUMc8MAq8eNt3PgkxsqgP8fvSUvdFHnyM2WcULjCK5hmVVbQ9",
  "key19": "2hcTyKdeNYoeXJjMYNGL8FwkUjJoJHU2RzG4JUr9TDXML3StoUBphVFnKwXWrvYzFuynQtdun5nBWPj9b6yPptpf",
  "key20": "3ajoBqDZPbfTiLeDN1thn91V8GXd3MxDURp7CKv89DtNrpkHQrke39y6qNURASDVZV3xbF5YbnhdUpbirqw6uk85",
  "key21": "4LzQrex5djU2X1JikLCFP4Hb8Gf1xjCjqNfwCj42DmYi3KuvfLLcQgG6qcGNow7eqhaPQE7b9UPsQ2ZyYzMDXRcg",
  "key22": "3uMD2gK5kYE9z4AU6XgfEpDvf95re1KBFHrevCgnmWqo45JtbA8o8A4LTZ8G18Hikiy48aPTzgyDmuVJTEt75SyM",
  "key23": "2Sx8zFP86k6n7hXrBe36p7XGWrrVXYtWMdAUdWe71w5hNY2Vn86rQ55y5hfTwwedWTNkZffY98KWyGWE1toAgASt",
  "key24": "3pGfGaMnojyBpAXzy758kXFkLj7WmguTwumoDber4pPnK19cajKJAtjrJijejNgnVPfWre2MkEHfpAqFYMKhBjmY",
  "key25": "4ubVzzDitPV4WjZQxhPxKCQuGp8DcUDu5JUtgc4vRyXGcby66kKsJ9rz6kWLBkCnLwvbpEp6Q5zx4rAmjbWT5Tqg",
  "key26": "67kj5hTBfEDQrfNDg8suxGW9ycth73Efhzvz5LuJ7Eb6NXVpqc7E8biMEWEA7w9EvgvMuQUBgsosGu2Ww8RJ38nB",
  "key27": "5REtzpH89AadCXdi1UywitDdoAXP7Bvuz89xN7mNP3zi9V84RaUuJtrrtMnJ4n1mWySBKCai4bYSUc9seuSjgMM5",
  "key28": "64cwncF18vumpQvZk7pxymvWHot37xDzkGAbh8RqsDJ8SsoQMq1isNBAoea9NM4jezZTC2txjijhtXhY9gFzZKDv",
  "key29": "5SRYi1dXKDZw3qfFBYzvVCLDzTyw7xBaY6iJ9C55z4UR7jwr4LAvFs6yA8B6VjCYSZPBu1y8W77vXDpoCDRSL3kJ",
  "key30": "5KC3ihmQc7vNVaTyVhBN5CoY8genLp9RzHLWSXsKSPrxgHLmtyEvv2mvtWbJtzzBKB1etT4HJKLUTmbcQVFvVPsJ",
  "key31": "4obcLS2acrWiHBbY9r9KTqJxmegnJWFQTUfqhQzc5ycj6hDE92SxHcbL9y3iG85hL3cidpJPoZoWs126B5w73oE6",
  "key32": "49mrQz9wUaieVFtDhSs6L1B7A5UH2vWKoMtzSdPn7sSLqExH7pN7BE8qaC9YWQLHAZLMGC5uP7bXyqxTwdts5A71"
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
