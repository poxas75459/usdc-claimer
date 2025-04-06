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
    "FF2dsGX5Pbk5mdk5vYPXWagYMFK4tG9YGoiu2Mtw1MeymRW4GqwqyvgWMe79CsZkNEHpmyqsNgatsC4qs99PeNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AY6Ld3fxyuKy82NUPMi1W5yzcGuCEc1ei1FYy5r6tJB7rK41Advit6j2E1kKn1KwhdJsuuRXu1ZHHVtYKYt66iU",
  "key1": "3gDkdB3F4YiMFujMm2UKDCpPHi91eE1Jf3jmte7nuwWhm8LZZZWYpCFnSM5DB3iMMMyd6h2c1j9g3Wp1LSh4Wrg5",
  "key2": "4LEzMdXF3wbH5k2oLnrQDNT59xo6wKg223AnrKCYNxP9zSNvyXLNH3kpyp1rCNfLWsJi2VpDTesvm795NDfpussq",
  "key3": "2VCKJqy6fmE1PTHJiiQtqVMRMGiGYnpzTniCXXzbNiYQViAAtb8vDQJ27kmdm6J1ZW4vgj4fU3mZQDnG4scprmDx",
  "key4": "5uScw3d7Swa4ryunmi8bowwPvLEEnQKj1bZeA5ygtudvmcRXySGEq9htBDRK26VWswHDq948ndFSSV8qbMMerPu7",
  "key5": "2FeHqWpvVkhyw6iLwp3RosTJRSFatdmNS9F8QwwvoVtcd6Ngw9LAdH1NPA737znF9nFtrr8Pc3MAXQfdthAE854d",
  "key6": "2JwUPyBP62Bp16g5rbztxmfxMRc62BcUGnqwWGJ44JYvfyCnTrdfpoCbwVTUQCHRhPZqJMTmzWTDzD19cxq4z7zt",
  "key7": "2eU44Jkdjubj3AXLFDjTjupjc8LgWTDzEKYp9zSWHyUZtDpFGJreLSp9KBdVHPsprsMLxCSeFvX5FPmycFLbRce3",
  "key8": "3xUqKa9nj4H4qx96nLXzFg5E8FFWH9zWaBc3HLSSBhTTZAeMzcGesHuXipkDx98iwzMnq2sHebDKxFanzYYx93kb",
  "key9": "2rxP8WPnnqM64qXZD6rgLUZ3yuzzLYiiKGkzhoU6UQoF2LN499g9cqmAcGUYVmyNuXM3npmWPHQU4XW5ZnuGZ9LS",
  "key10": "5EpXwRWDRXZtNLcovVAVAh6phrMWSBXzj3QQ7B8Xobrm5Ryb6XLcSA9HjUnyruvZE3aDsLAwh1R8g4snTYmQzHsF",
  "key11": "3JqcbTghLapzGH9brbDKp6dBVqc4mcjSnVy5NkUAyCeh9eVZVGAoKwmKp1ezz9JhTHzVgTYwrHQ5fM5Fiy4jgmYx",
  "key12": "3j7DD82oZkTHyKfkfp2sLKqMvH3y9Jgtm7rcBznV6Lrb69XpUgS8B4yL6MxeMwGd4hPDLdMrNaL7XC8Ys7EUvjfj",
  "key13": "2jLBhgkSLGka6spfktMYGBPRu85KaaY9Dzs4uUt1PbxUyCeiXPXZXQnuT6WYFFDUeXzezTDWoEDEUMuiriS3rvpx",
  "key14": "4dJLrSvfL9QAKBSCWbqy1pB687wfJ3KSC5h6hGHjDZpgTQwiHQbjdkBX19x113tHQRLLWtq7vvwEsPNFDojuduQz",
  "key15": "4SmAdmhb7ZbPKYnugmjnKwciM7CQAqMAsz6GyJpgaXjVTNdgP69EeRLwRVa79z95r2KeG3LuyZY5pMn3Mgyb7vJG",
  "key16": "bRuMZPedjxtHc1np4YcKbHr96UZ36TYEAAFUGMMwHtb9x6mEphfnqxjxgvmba7dEQ7M5tqVP8CpnfAFX5Js7GGk",
  "key17": "5rsyC31CAuLdjYuigxYoNWLAkbBgjCvC7pPXJo5AZCD8Yhyin5DUb9gooZep4kbBdoY5z24nxxxt6vLTJqkA6hfU",
  "key18": "5fVsxnbyNeWbdU7oZ98fEPJ2axTvZB8w5erCxuc8QoUUFFWFNCjJBA2cGsxRugXsYxyKcmxUfoGnuHZ62iG3iz6x",
  "key19": "33CRDLYq33TPj9VufVC6coKa2LGBpZ5jVLVpUaDAownFckUuYRFM5eCbme44o5Lq6sxPDGjt8y2hshDTgQa8Qp1x",
  "key20": "25PamzUiWD27ekxHBAhJueth1LdzgYQef1KYyYKvxL77SHFYvPYsD36EQumh8MUGE3VYv1yCCD1bnM1KvKjAYxnC",
  "key21": "46srew4Rf1gdeVQxvsPz14pGWgjFdWJU2CPUfUSsQedyddMW34WhtMJUBNHEwcuRWuFZDUmJAyYz9xogVYKzkzVM",
  "key22": "5RLLD3zC9Jc29Js9wCknF1aGz6PPdeaNs77tc6Rzc4yWiHSdC5kGUYEfDABR2auDMBCTffUaTTZyHJ7WE23TQuom",
  "key23": "fGh7xNb1qJQcBZiQNC7nrnEtrtncjzVZ4zvCDGUb1BsXHs2EyyWecwUn62sDwEu5BQxEz7D7XuAHwjiiBHzg1Zo",
  "key24": "F3yqaNEzhULcVc2Ab6cgukg6PsY2jo6ed5BDgdyBd82eteCJkGwozTqc9GDKpD4ZSXNQobwy6uKtPkY3e8ZK43d",
  "key25": "48LmXQJrUSkecEYfVivKva46ytnJwwX89gyd3KUHsn1TxCUaoC9HTBBdNnLSyZn1EcbcBzGDgsWKj8HY7o5fKuwY",
  "key26": "9TmTuTGhhfV58SZeLRvWe8kCGT5K8QveatvsJB41fiihEgRcu5nadMNBRsfG9D61MqLMY77LpiAFbGrTJ6AikJA",
  "key27": "5f3RSXD5g4Rr49x8JmHmw2HKY4prWktgvdxQ1CJ7CF2eXaDRer8WjnUegbaFSMjYEiaL76HPwS67L5dBWcqZDSq3",
  "key28": "3CBNzmpYooqtGHgqP2cP4tD16EvgZNjJmMFmAfvbmguqZbHUjCofkDcyd3xxgSnGxJQhKTN4BEmmjcV3C4SqVAGF",
  "key29": "t8Ecj7Moi6vgY6tknunwjfQZyEi9YHfYXjpSPaBfJoXFpDkYb8dkFk2vNwW3ddY86zNurx6tMYNyDiWTY54LfVp",
  "key30": "2M6YKp1UyrQjwLWfTiKD2BRFH3zwPNDQVytTTjY7i3Yxmcff4j66Pxm3ZWYeKr4AcyMQosGFdo58eC3gdNnNSLmK",
  "key31": "2aq9WXGhDxhSkPv8Hktgz8DBVpNkx7mtE2oAJAj9PeykMWXuB95GCkUzXHS36atGneDAnbw9Lp7TH336KwG1nhQw",
  "key32": "6nG7yu8WPs9yjtjim11V2NpNxb6BXnYngXMZ8ZCPRwKu96GKTNbinVUdPZdNPChpvNp5r2g1nKVDmsAPaJGmhaW",
  "key33": "3dFyQMGP2Lcj86xjhZ4UEinaf3pM67XSE5JvgAwi7XGKcvi5fTgerBpj1Au4n5bQ4w84Dz4WLUkVUfrfedEwvFYq",
  "key34": "2XPr5BTkxZnyQpGTzzeqvVuYVkc2cc5dQeXoosxDKgSJzj7VRCYtrZNxasczauStALUTaYz7QPganwuRnYYbfoVY",
  "key35": "3zd8aKk5is8yh6MZfsAMGuEmoJioTTGvVbFVnjkiD6yEFvGGBGhz2ivqFr16v9Y2TeAxFznuddVZktnn7dndimGx",
  "key36": "5DqHyctygkGyhcJywUjtubZDTaHPGfCCiayKUegkjfbjzugf7C3Z5tZzXQvTMTvM17afY5u23Ybwst1owCAzCJju",
  "key37": "3aRRsmjLTksSfmQB3L6jsVfZP5D5jyNt7iaRiEbyY6gUsTgxxP39x1DQ7eLzfq9qswtLuBLg4kMCou1mxpdoEv25",
  "key38": "5fgaSBSHMZ29TiMYtn9WTESfftxPfu92G6rrszvqbUVzodfzNgm1BpRobSgQ1yGZVbRLprpNVkh2aUzXqQA2j7Y3",
  "key39": "JW5c8vm2QoSUDkEMgvsXo7GvBQnZ19TFZXVgVaqzZvdTkLkAVR7dSs6Vqa6vPUs5WfSdxCBm4peGedvLqRyFNNp",
  "key40": "RLSArBmUQH8BdBtobNHtrGwartke2TcEKfX2y4VYTEo1F76t9R3fXoEWsDbtvsm5Naib5yi3RUVutmWpBwknfu2",
  "key41": "26K4UzRpiHyKaGBdNNKg3U1evzHCBwmrMXEZpbrY15x3dqC21C7h2Z5FLj7M5DpiZyRvnY5dy2aY23Bs5SxiudPZ",
  "key42": "32y2eHUgbvsKvf7CkZqZkkRkoc7JWrzBqBdGbJ4ERuvwJaRpCEqcrGNkwhEUrw55uMWZzaKzudH43fQEbApLvQLS",
  "key43": "2LJVoj6JrVXe52tokhHpWwKT4SBqYRpam4jqiB57pN7at2s9pVZNB59ghJ9gq9Lb7bc2TCdk5YTa3xFoQSHxdUP4",
  "key44": "3rirBxRwkgtN6jsQ31KGcKcgHUL4nkzUmBn6zeFwmZBhFTCPyiU9rtuDQGJd1s5LCijvhuzapBT7Ett6CE4rDN8K"
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
