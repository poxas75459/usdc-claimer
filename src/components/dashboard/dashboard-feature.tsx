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
    "5BRGqjZXfguLNP2YpDrpbQCCVgPwXJnfYSrNAS3a2Bo7KrDD9mq7EkUYk6kdcuvNXiZfMqB4946wcPM8CoRv92PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6syjLZ9yLXBkiNs5gdqPFqbzMgzkbDL5SwfxeucSWCeiv4JJLFVbQG4Y5UFQKeiFCZpJs4ndowhxg93utza7cs",
  "key1": "3RoHs5teFtSK1ybh54BBuGighh7T65zPz7EYxG3NT5vNercRErQ8RqUDXZSgarBabPiW7MP5KpdigQ67z2yQxjFL",
  "key2": "4xvYLyhJh38Sh85WGCV8k3TdsVVngCG5Ao1adwGA2JqV8mH2pqiC1TjTeucBZCRmD4J8yQ72FatcCC8LPHBfbfb7",
  "key3": "2MEaoUrJ1KAfEBZeVFrLQNz1EFX33hWGcq3ce173V535adatPzAPckWeshvLxSuGDnmnfKLmT864oWRciwtUy638",
  "key4": "2kihkoVbtNnkZjjecUAU5P8JcewAyihx6V1WeKtbtkqo33TVxWJmBUdoo7CXkGfDFxk8byj9cJAr8LZ4DDBJMPJ6",
  "key5": "3KDMdoeYCMhSuNffNBkyzZjQrfANkwxV6DZ2fPzWSWACvreU5e3xEWtpM42EjiPgzCtPvCv8QM6i2S5foK912eV4",
  "key6": "32VecorSMACmHkBRmz16nQfQS1xstLp7Ehi1JXUBtz64cPyoNqBVercwTAUdv3w3NSZEo8D5TGsnckovM7gckPw5",
  "key7": "4MYfac6ARbBPEAD2TfK4qAEoJL1V3TxL81r2Ts5WgWF9J4sj2eYViY7Q446AHxmP2CWG3VGyuoy5PcZRRQj1nBPT",
  "key8": "4HTtPVvKfHD4aJYZitd6f1yx6TUxciahqjecGahfeFi7F6iATJiDYGonyvgmdm67582EVG7XbxJWp1LyCYQ8biii",
  "key9": "4eCu3xqp1neiA4au5JUJgwSUqZGtAXUFH1pWRsXHAXQBZvTsen292uz63aHeuhtcgTmAFvcZdiKBWRvVb6LMYVPm",
  "key10": "TsA7kZqfQdX8zmTLyBeShtztookvBgQPs3jJbvrcBq8jsUd68rsUebaVo1tNbPTAgnXfhbVBovntK7RJkkVQ3nn",
  "key11": "5CrfXVoF4wdeZPkVzmfocQMYTy548L8vzzJWgWJzHG6SpPAJdXbQooreBdLJjpGk8PY5bBG64nucbhiymvPZadaX",
  "key12": "2FwtN3ZuJMKRFETvX1xFyFX6D4kf9WoUukSkAYTuadadxk4o3aCHvmcPsugDVapXRXrnguffR8vJvKpKhtKektvm",
  "key13": "r3hzjU3VrNZuunTxoxqNrKrSnY66fb6CdhGKgjHHgX5qGhK8QP539pgZ2Bzy4hHdUwNj48nk1DKJNXeatiPJiLK",
  "key14": "32kV6kuSHPfhxcYYSpJB3VmjJuCRrYpiaJeuCzDyCw4gvEqEcxcLiZWbBxamdiatgVg2wtFuvYTCr6EEqjZqFVbW",
  "key15": "mdcpWhXLceVt2fiLy8XrdqHkghqMQHTxHGYtj2KgeDwYiCri51M5dEDUrTMAivSdTaQXZzEtmGBQS2vuHb4MJCr",
  "key16": "5Xna9dojJcxXFXsEwcRFrbx8MmEijQsZjKFF5ykU6NfQ7TmjR6NtYUsJcYsBAev2HDAxARW7iyUJKvmkDFDzt1aV",
  "key17": "2LmQrYaQPx62BeTaCXniDTwU5gjPpDv4k2SMPyNsEMJFxBJKGDzWrzSb2Z2UYWhLqJnBVoRbAwhuxv4Q4pyVh4NR",
  "key18": "5iP7MLQ47eZXM5oGPicUei3pLqDhFrLAgSRsTRZLCQbJqiuAsmUZGQdoxLdgpsAGcHPpEvdVifdY4q2cnwjbjTWK",
  "key19": "4gQmSsCBwWHfRHbiWy8zmMbWvsi69AmMDzJxDUw6EmSu4FthQEV8WoDdx3grp8ugvjEdYunHkx28XNiAmwewQszF",
  "key20": "54XpvtCrSrkVo3yXguz6YrLjxUuGncCzy1Cud2q7uRS1aftEfw75NvoBvcmsXTmWZUi2N9NtLHXUVrmBB3JkRDdM",
  "key21": "zmYEyJ6dcyE6rJSBdG8XNCCViQnYPvUvmCCBh9LUQGrYoruYSuRVLcoqDnarfovn5hcxjJRvHiwiL8fXjgphQAh",
  "key22": "3GnCHazUQzRFmbUuwpqHRWbPkdL9oeLW1m5mpqAQKGU3pUGJhVULwbckQQwUKgfmhaUJLMwsJnzNJSYTptSZYxqg",
  "key23": "Eb1YH5P9GRUZrUoBpRtwVknJxTAfYueNUsUeuVRhcn4p77FMR1jhyRvxC2WULaeEnmi8EEw4mSfiaaT1maZ7KeK",
  "key24": "JjAeygdH1Hi1fqMqqMgqzTxtuLJZboA33toetK8J2YWjnA4MbJpqTDXBhuCBpj8Lpcw6avUQMwrgBCRCjZgPTLK",
  "key25": "4dx3NWgnFSzt6gfDUc5FzPMSQ6EqVA2KzeQhs4ciR5Lpi89cTGqps7HETv7Y1rw5VTnwJ9DWRArSn8ymBX715vVm",
  "key26": "4FTTRHUZLcuVGHXGUp4gJZNj6sVZQwGQThchkjWiYDrnMdyvGvnmRVUqh1XWBaQJkpTWqvrxE6jz2cdVrbytF9sS",
  "key27": "42qJALSWoaaKWwKLMp5Qi6DYSBDW4VpxhxfE6RAUqZ2mFFMc9Dn5DWFbfXZi4wTqeNggENiacnnB8pcW9SpeuPS2"
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
