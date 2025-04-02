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
    "41SBBzAgmU7bdZU345jTenMgFN9e4FQyYq52MnWMVzfGfPqpS2d6Q9RDocneYZjnPNwU1uKHH1hjNTcKTwx5qVij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J6J2jsVqJEZ7Mar6YLxkAQLbkSRckqY223aLGEspQ4emVAGaMphAGLmkYBnBJcneuJE5MeR82VVD3nbuREcu4Xa",
  "key1": "2exfaYi1z9MoCnCuBNBzJ88tsB2ZsoE8rYGsrwT9bNXifMcGq9QB7w4RivjuAaF35nfkLGnrEnrmdWT9P4QKZyz3",
  "key2": "NyJ23Y2TXDSCxiUZDRdhn5d2nGMNb7z8qSM4dFSU1VRVndntLP4bRPEYZaH1gaKZ8KaAZy3xXSCbBGSJpfQgsXu",
  "key3": "GkR6rBC3YXGGXJpgDT6oiJGTRHpfSS8D9cje185TjSH8nbTi9RWRaxfVEXQXzH9uHegF2G2SRJkhZJsyUWCsNLV",
  "key4": "4bzFeUZDg2kVzgYvXoN6NbiZ1xSEb4jDapFtKJ61y55XuDMH3DQFTy6RFgGNRQBGfnb5o1UwPBbVhJvendguZopN",
  "key5": "5y7k1YhM3QhM8JmHNZouTgeJgbHn1FSrULi58MpwTHtny3Fjm4chA7rFeXS9hMQVWXMczvrg9K1BRktuakPWfhif",
  "key6": "31Dupijws2yswSgDz8d3MmAHGi3nPFjB5qoK8dfFzY8DoZ7thTqn6hMGoEQ66E3RXrMvU5Wb76t3YbJH5QHxT6KE",
  "key7": "shBtDS7DMjbe7kf756fDGCNhPiS35f6JdRPEMvoWVLHsmmBsvPz2wfUbA8eAv5HVAsNzxH4xNQ2dt8VU6FokYkt",
  "key8": "3vxxW5z1eSn3SfAcXAgoNeZRNf5bDqvympRYJkfhnWucBXA8pQLiS8pG48ZDSCNuYFUQJjLqQ8s7DHpG9WXPnqpr",
  "key9": "2cvXCSi5kJimHAatqTUhGpEogeF2JSMFDv4xSALULM3cdr9nRewR4qtccU3j9gNZuNf4EyTm4jHSkV8np7q4dbyR",
  "key10": "2iQfXgnCKUgJ7EkSyLHRmSzjYsBW4har7wsF4GhciAKaKCb5yfrUEtchgAEqSbLkysVC6k6Ke8o4zXjFsxC91U76",
  "key11": "2FhqXMsA9isiWe6zeD81kR8kNQ8Gj4bHgV93cZTDEUrFc7ho9L8dRN9q35BoPhzZj2tpmgbSGdc1nA64HQFBipnv",
  "key12": "4GdFaTvExtqp6KZ24PdT5pusP7rCvAusJS74VNroMZ6jGWTFYqE3GwyXKBfY3qHsvQ9adPDBcK4eLrvZ5pbTvATK",
  "key13": "4s6tiepsWNYeEC18YCkUFysuT1xXGrFv9mm5nrQtcN78j4e3dmc8Em6Q4G4vjypYseJ8AT6e3Ni1yRpMc8JMV9sC",
  "key14": "2dXND3uXe3Q7Fqy4a5PSGHQDXx3nfGm2mCQtmKoJDuXWMNt6kmYS8MLQr5gFXgkiAq3eJAAFDYuiNhyMDrNixN4p",
  "key15": "eLkUM59P7A6XAEd5PSGoSprPqbibBondHyrnN8yjqCHSwTaFHqA6pRprxe8rrninmpHuqdjAx6Vt4tuEhDxDjRW",
  "key16": "V8ZTPfDKfH36E9L2sCK7RH1BmsuVTjvBBj8zvh8UzFxgbtsg59pk9DyBUK1pF943fhYkPPRGUsBAe6wUcoB8nsq",
  "key17": "2EAA31dadQi2KDyjXQYpATiUGgWAJddaCpGaKfSGheTj28yBAtYCjs1EavAWpQPcuATjxzSk7e9Rvvcr1EnrobWG",
  "key18": "5wimm8HVUJsyM2Smzwzkq32VxhWCykc1xbhM1TYZ5i13tg4PqCcsXQAXHaEfdAhCcQMz97md2gxDoGAPJ8DtCKby",
  "key19": "GguWcDzzk9qipeFkae25TqARUraWjQmZrpeGSS1sJup6uXDY53hmhkgRawXNHfyqfgQrbTMea8nQCwedmg25Yxa",
  "key20": "4ypNKa6NX5GP9niEzSDqb8gwCadsdQXhoJKuMP2VJD6ctv1EpHYMM4EpkivdepJC6fpcJUdnuN3CxPGDFMkSPEpj",
  "key21": "4jA3Ze7QzTxicfwyfwiPGhK4AVjDGpgJbW6CY9QsxXgcrfeyQGd32Pqm1QXM5mJUVRxmuacMcLaap4iePUCzkGSS",
  "key22": "63H3QoaAAoenSuqus1uVmByj94PTKd2QTdaXuVdaG4HVb94xk3EZvFC3a6z753h9Yycd4nvVL1UatTJiGjHhMZSN",
  "key23": "5HksoeAjZ18x6EaUcsCBfF2Si2Km9UCqnb6SLp48NpJU2aBNpiePtZjcJgdbMkpv1Dmpb55X7mrNcasqjjanT7Jx",
  "key24": "5BK7ve9dwNbfY5wKwuqxuhhfZFtetgSB1fs5iUiaHQen29sMtNuzNxUxMNifQ7EFf44nBc355hfNnkPAo1Wuf6fP",
  "key25": "58ci5oCZ8iiQr8cF38J9c9GA25e5aewK9Xdt8R2LgECwf7kEWbwpEJU5L2qstxFrnHwouvsuGWymg9hnXkkNZN9E",
  "key26": "A4hKhoFWpypzQFexFNkveDtHULhF2scd3BP8MyswyMuQ6JjLq9c6PEopumSJkizjeQ8pgt3CBbmBmngzVQeuJoS"
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
