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
    "4PjBZtzYUHss5MF1RysXMhbMhC8HujMZpCYKAzhbEBcL8DeqbQRUrqNbzNYf1XayXdA4LRywgz2Hiu36eUu8HUDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sv3GycahHUVrWk3PbpT8aHrKkqD3gPenAc1k2dGuDK2k7hfY2BrytqgRfnWZF7QXqfKMLZie1YWysPZF35pxW6L",
  "key1": "4Cd6DmGQxjqFDLyAZzvP8T4TVwJAZzjb4WMrGditBVAtPVWRXE4FUQJTQ15MDGXZ7V47Qm9dkrfb4gxw4JLfEtGF",
  "key2": "2KB3awSDxfzqTQR1VpmX6ek82aYTwSuemUji3cmqXfFqRCkhrytjChHVTutL9hQqV9G3e3exVuyYLcww6AHSs3xF",
  "key3": "3UZPsLKAS6SdU4D7CnCdDD6LFtxYx5rc7Ld5KGsNRQXA9gdkiHjBPq62UwG4cqVxNqQXARXSbTDumz4UDYtHwRcW",
  "key4": "5eNa3y4dN972GySBpUyLeXCeU4UnVHyJ3JTp9NUBziRzNammSoDcQ1BgDoBQxTUyAfY7dQXsmFG1ST93iXaLYRPX",
  "key5": "2UFDtqBteo8ScrfmybtRHcVrezQW5kEpsrJ6rdLdfBRouTpoKSouGq1WLCPkqtjBudQ9Ln7tueqbwdKfwCdyAfRF",
  "key6": "fWXucuWoGvvvBiafYktncqS1eAmifsYRxuYwRRMtLcyocqah6wyq3is2UE9EwXg5ypBivvHAwimJiLvu9K8VtHc",
  "key7": "2pTH6gcjdJ2WwpyTAhsuUizyceQfVsw4KHSfkxT7zxg9i3wgFt6SAUr1sWYpFwdRoq1c5J1yNtYRcGahZQq6K1d4",
  "key8": "votPNeDfTdJQke5QPXykvQjKiQ1n1fYDXD4SN7vGt8jF3xDGPdpPZ3Mkq4JKstPQhMwt3NH2Pp5MtY6k2uYVyx1",
  "key9": "8XKhSqRf4F6MgQjFKMjPVgAy1yPv4muhViQfHQynRoV4xih3Qit9RbpLWFo69YANcVZhf5cYMgHbEFvu1KJFN3m",
  "key10": "26AFS4VBdKEhN3hR3qNSwXoTFkgdFFP7PPQ3yxscDoRAEXvyQzcceYZGqGKaGni6hWZGQAvEnjgcCRch7ftiTke5",
  "key11": "41Hx9vyosDYtaT3rDnksKxeVh16b5htjFXK3YbUQfQ8BrL4YZxqAFGodABRmL9DMvv5hSQjotLNG8jAH2MsevjCC",
  "key12": "2Lb3HNU5o5LwMXua2y4kkQn4YitxgARzsJSLPedDNspSg5kFxBaCvXXhsP3zZcAYqn9EB4VgvJioueQ5LjEzkGXJ",
  "key13": "MEZZumi53Nq7fiKUT1U6XVw2pza9sWbKZVBHfkrNA3ostbY7xVijmEAMdvBMBTUfKJkTHeTUr8BRkcKufXjsXbe",
  "key14": "5a12Z1uNpjovKJJTEaNtfawYmikiYQ7wuPt71YVv4DKztRhXwSJ31J5yZB3GW4SYQ5msCrEv6CzL2TBBopk7czLS",
  "key15": "VWzghdngSjz9Ktn8vFM2vM61dExjjVr7C1x16dG2nK2JjuYFMZFjMyW634emB4xFWoLfgrvQsKMPfEqTsvPKXyF",
  "key16": "gsibEZ1voHofiAmoF6Mrpv9sVM1m6oBWE9ojW1sFJkSindHeUZMnXYrKzDiN71cAJbhBmGg4a9FTnQcKLmYAN7c",
  "key17": "3GDmtkof9nyihgxwjfNP7mp3YZeWukUNVj9TSpaxY4xiyQnYFLueVbCJvuRVRurqh9YyAdDyDoPcrhwJmTyEdkmj",
  "key18": "66LV7B52ieSCwJC8HmYE4MAK6yhfKu6vgYrCFWorvaNVHPMeSVpswWMJTGGoPir4MV35DUpqYuQCMNJFHAxhsXfe",
  "key19": "xUrpR7arYd7usSUSEeANk1Q6AB6NY8xNzXoZqmAHxLR5r9DrLL5MLrJX7TZoHfso7hBmxwhCmdnManvwuhPDUzq",
  "key20": "2YNLXZ3GF2H7zekztfg7oYf9BDkB5fz9aNRFGmr4sizCYDxBVYmwGm7GS7A1Am3xUA4V1U1F8KqXG1N4LhvdvwEv",
  "key21": "ec24F89diJU9D9WM5zDgzt7D6WwbbpUWdpmqvoKmagFRurmg2bZpRrNWZVmQuujYMNPydu7aFQPnAM2ypC3uRpF",
  "key22": "2t7Pv9PM7yWtPDvQN6x2m6ZTjYay728cY9aUH8ZwoshZprq8KYT2GQRvfKbVLf7dc2KC7CVtRCybNE4UE5cC83GY",
  "key23": "4Swo3KSKjdANrPveMVkkeDXzQvQkbdU55wwVhz3ZGxU6ftKfRTWmYbeCP4GDHAkpFnHwGS6PXbF2589vRsctwAq8",
  "key24": "4bSPeP4K4Mu2nJw5TCFKP7naDhdEM3wdtFBt4AvYrzGkjL7aNgL6NZXYpNtJSXVXrMac9wEAVZNDKdF7ZLzvesdU",
  "key25": "3UZ1ACtwFyvmrD71M2Ko61iV6x1Cm7jVyj4yt79towSg5FpCirnygLkfhqVYf6gH3B7ctB3g2rKogvPHW128NALC",
  "key26": "3Eka4Xd9Mp1D6PuSabnq1cuDv2GqcM7qUaxtsdvn1yy5MRjmMNiESdhqnYwpj8uvFJ4g9BivDDW6BBMUnPMmV8oD",
  "key27": "4D6g31VBfXjs1s2bgbEMYfQHJUi5ddDyP1DoVqWJcbcfE261WsoLFHUHDKp9n7z6P3SrGJqAdyJoLZZUYe8fTAtE",
  "key28": "CU4VXuGJJU47P1Jt4QSEP8tCqSXGZMrESAGfUUxBLZgSvcA2BRRvjXiTt8FLaEG1fsdLQjcx2KQVHXRqLQXSwPh",
  "key29": "5JSJ3ZmHitb75qxwQLkmxYocDsBNECcf9d37nX22Heuztry97aog4Jb8c57UPs7FWeUga9yReU9rcuRWVcoMHeS2",
  "key30": "5P73MuHSnFGYYTcn7JnZnktmvP5Ls4ZYffWzDcC2XNpyVaZh1Ueu8oLrrpmkhpazntrZDRGYMyq1MJ26suMW5E6i"
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
